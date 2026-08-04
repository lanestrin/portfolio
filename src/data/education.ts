export interface Education {
    school: string;
    degree: string;
    period: string;
    focus: string;
    description: string;
}

export interface Certification {
    title: string;
    provider: string;
    category: string;
}

export const education: Education[] = [
    {
        school: "Kansas State University",
        degree: "Bachelor of Fine Arts",
        period: "2004 — 2009",
        focus: "Visual Communication / Graphic Design",
        description:
            "Formal design foundation in visual communication, typography, layout, brand systems, and user-centered presentation.",
    },
    {
        school: "Kansas City Kansas Community College",
        degree: "Associate of Applied Science",
        period: "2002 — 2004",
        focus: "Computer Aided Drafting",
        description:
            "Technical drafting background that strengthened precision, systems thinking, documentation, and detail-oriented production work.",
    },
];


export const certifications: Certification[] = [
    {
        title: "Software Architecture & Technology of Large-Scale Systems",
        provider: "Udemy",
        category: "Architecture",
    },
    {
        title: "Software Architecture Security",
        provider: "Udemy",
        category: "Security",
    },
    {
        title: "Advanced React",
        provider: "Udemy",
        category: "Frontend",
    },
    {
        title: "Next.js",
        provider: "Udemy",
        category: "Frontend",
    },
];