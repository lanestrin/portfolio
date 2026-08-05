import { coverLetterTemplateTokens } from "../../data";
import type {
  CoverLetterData,
  CoverLetterApplication,
  CoverLetterContent,
} from "../../data/coverLetter";
import styles from "./CoverLetter.module.scss";

interface CoverLetterFormProps {
  coverLetter: CoverLetterData;
  onChange: (coverLetter: CoverLetterData) => void;
}

interface ApplicationField {
  key: keyof CoverLetterApplication;
  label: string;
  placeholder: string;
}

interface ContentField {
  key: keyof CoverLetterContent;
  label: string;
  description?: string;
  rows: number;
}

const applicationFields: ApplicationField[] = [
  {
    key: "company",
    label: "Company",
    placeholder: "Garmin",
  },
  {
    key: "position",
    label: "Position",
    placeholder: "Software Engineer 2 — Web Development",
  },
  {
    key: "hiringManager",
    label: "Hiring manager",
    placeholder: "Hiring Team",
  },
  {
    key: "department",
    label: "Department",
    placeholder: "Core Platform Technology",
  },
  {
    key: "location",
    label: "Location",
    placeholder: "Greater Kansas City Area",
  },
  {
    key: "jobId",
    label: "Job ID",
    placeholder: "Optional",
  },
  {
    key: "date",
    label: "Date",
    placeholder: "August 4, 2026",
  },
];

const contentFields: ContentField[] = [
  {
    key: "greeting",
    label: "Greeting",
    rows: 1,
  },
  {
    key: "opening",
    label: "Opening",
    description:
      "Introduce yourself, name the role, and explain your strongest reason for applying.",
    rows: 5,
  },
  {
    key: "experience",
    label: "Relevant experience",
    description:
      "Connect your experience, technical strengths, and measurable results to the position.",
    rows: 7,
  },
  {
    key: "companyFit",
    label: "Why this company",
    description:
      "Show that the letter is specific to this company rather than a generic application.",
    rows: 6,
  },
  {
    key: "closing",
    label: "Closing",
    description:
      "Reinforce your interest and invite the hiring team to continue the conversation.",
    rows: 4,
  },
  {
    key: "signoff",
    label: "Signoff",
    rows: 1,
  },
];

const CoverLetterForm = ({ coverLetter, onChange }: CoverLetterFormProps) => {
  const updateApplication = (
    field: keyof CoverLetterApplication,
    value: string,
  ) => {
    onChange({
      ...coverLetter,
      application: {
        ...coverLetter.application,
        [field]: value,
      },
    });
  };

  const updateContent = (field: keyof CoverLetterContent, value: string) => {
    onChange({
      ...coverLetter,
      content: {
        ...coverLetter.content,
        [field]: value,
      },
    });
  };

  return (
    <aside className={styles.editor}>
      <header className={styles.editorHeader}>
        <p className={styles.editorEyebrow}>Application Editor</p>

        <h2>Customize your cover letter</h2>

        <p>
          Update the application details and letter content. Your changes will
          appear in the preview immediately.
        </p>
      </header>

      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <fieldset className={styles.formSection}>
          <legend>Application details</legend>

          <div className={styles.fieldGrid}>
            {applicationFields.map(({ key, label, placeholder }) => (
              <label
                key={key}
                className={`${styles.field} ${
                  key === "position" ? styles.fieldWide : ""
                }`}
              >
                <span>{label}</span>

                <input
                  type="text"
                  value={coverLetter.application[key]}
                  placeholder={placeholder}
                  onChange={(event) =>
                    updateApplication(key, event.target.value)
                  }
                />
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.formSection}>
          <legend>Letter content</legend>

          <div className={styles.tokenHelper}>
            <p>
              Use template tokens to automatically insert application details.
            </p>

            <div
              className={styles.tokenList}
              aria-label="Available template tokens"
            >
              {coverLetterTemplateTokens.map((token) => (
                <code key={token}>{`{{${token}}}`}</code>
              ))}
            </div>
          </div>

          <div className={styles.contentFields}>
            {contentFields.map(({ key, label, description, rows }) => (
              <label key={key} className={styles.field}>
                <span>{label}</span>

                {description && (
                  <small className={styles.fieldDescription}>
                    {description}
                  </small>
                )}

                <textarea
                  value={coverLetter.content[key]}
                  rows={rows}
                  onChange={(event) => updateContent(key, event.target.value)}
                />
              </label>
            ))}
          </div>
        </fieldset>
      </form>
    </aside>
  );
};

export default CoverLetterForm;
