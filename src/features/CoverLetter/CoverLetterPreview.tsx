import { applyCoverLetterTokens, profile } from "../../data";
import type { CoverLetterData } from "../../data/coverLetter";
import styles from "./CoverLetter.module.scss";

interface CoverLetterPreviewProps {
  coverLetter: CoverLetterData;
}

const CoverLetterPreview = ({ coverLetter }: CoverLetterPreviewProps) => {
  const { application, content } = coverLetter;

  const formatContent = (value: string) =>
    applyCoverLetterTokens(value, coverLetter);

  return (
    <section className={styles.preview} aria-label="Cover letter preview">
      <article className={styles.page}>
        <header className={styles.header}>
          <div className={styles.identity}>
            <p className={styles.eyebrow}>Portfolio / Cover Letter</p>

            <h1>{profile.name}</h1>

            <p className={styles.title}>{profile.title}</p>
          </div>

          <address className={styles.contact}>
            <a href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>

            <a href={profile.contact.phoneHref}>{profile.contact.phone}</a>

            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/lanestrin
            </a>

            <a
              href={profile.contact.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              lan-nguyen-dev.vercel.app/case-study
            </a>
          </address>
        </header>

        <div className={styles.letter}>
          <p className={styles.date}>{application.date}</p>

          <address className={styles.recipient}>
            <span>{application.hiringManager}</span>

            {application.department && <span>{application.department}</span>}

            <span>{application.company}</span>

            {application.location && <span>{application.location}</span>}
          </address>

          <div className={styles.subject}>
            <span>Re:</span>

            <strong>{application.position}</strong>

            {application.jobId && <span>Job ID {application.jobId}</span>}
          </div>

          <div className={styles.body}>
            <p>{formatContent(content.greeting)}</p>

            <p>{formatContent(content.opening)}</p>

            <p>{formatContent(content.experience)}</p>

            <p>{formatContent(content.companyFit)}</p>

            <p>{formatContent(content.closing)}</p>
          </div>

          <footer className={styles.signature}>
            <p>{formatContent(content.signoff)}</p>

            <strong>{profile.name}</strong>
          </footer>
        </div>
      </article>
    </section>
  );
};

export default CoverLetterPreview;
