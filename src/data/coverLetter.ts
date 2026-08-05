export interface CoverLetterApplication {
  company: string;
  position: string;
  hiringManager: string;
  department: string;
  location: string;
  jobId: string;
  date: string;
}

export interface CoverLetterContent {
  greeting: string;
  opening: string;
  experience: string;
  companyFit: string;
  closing: string;
  signoff: string;
}

export interface CoverLetterData {
  id: string;
  application: CoverLetterApplication;
  content: CoverLetterContent;
}

export const coverLetterTemplateTokens = [
  "company",
  "position",
  "hiringManager",
  "department",
  "location",
  "jobId",
] as const;

export type CoverLetterTemplateToken =
  (typeof coverLetterTemplateTokens)[number];

const getCurrentDate = () =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

export const defaultCoverLetter: CoverLetterData = {
  id: "default-cover-letter",

  application: {
    company: "Company Name",
    position: "Position Title",
    hiringManager: "Hiring Team",
    department: "Department Name",
    location: "City, State",
    jobId: "",
    date: getCurrentDate(),
  },

  content: {
    greeting: "Dear {{hiringManager}},",

    opening:
      "I’m applying for the {{position}} role at {{company}}. I’m a software engineer focused on frontend development, with experience building and modernizing enterprise web applications using React, TypeScript, and .NET-backed services.",

    experience:
      "In my current work, I translate complex business requirements and backend data into clear, maintainable user experiences. I contribute across application architecture, reusable components, API integration, testing, code review, and production support.",

    companyFit:
      "This opportunity stands out because it combines technical problem-solving, collaboration, and the development of web experiences that need to be reliable and easy to use. I would bring a practical frontend perspective, strong attention to product details, and experience working across design, engineering, and business teams.",

    closing:
      "Thank you for your time. I’d welcome the opportunity to discuss how my experience could support {{company}} and the {{department}} team.",

    signoff: "Best,",
  },
};

export const applyCoverLetterTokens = (
  value: string,
  coverLetter: CoverLetterData,
) => {
  const { application } = coverLetter;

  const tokens: Record<CoverLetterTemplateToken, string> = {
    company: application.company,
    position: application.position,
    hiringManager: application.hiringManager,
    department: application.department,
    location: application.location,
    jobId: application.jobId,
  };

  return coverLetterTemplateTokens.reduce((result, token) => {
    return result
      .split(`{{${token}}}`)
      .join(tokens[token].trim());
  }, value);
};