import styles from "./TechnicalSkills.module.scss";
import { resumeData } from "../../data/resumeData";

const TechnicalSkills = () => {
  return (
    <section
      className={styles.expertise}
      aria-labelledby="technical-skills-title"
    >
      <div className="container">
        <header className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Professional Expertise</span>

          <h2 id="technical-skills-title">Technical Skills</h2>

          <p>
            Frontend-focused engineering backed by C# and .NET experience,
            production testing, commerce integrations, analytics, automation,
            and modern delivery tooling.
          </p>
        </header>

        <div
          className={styles.skillGroups}
          aria-label="Technical skills by category"
        >
          {resumeData.expertise.map((area) => (
            <article key={area.title} className={styles.skillGroup}>
              <h3 className={styles.skillLabel}>{area.title}</h3>

              <ul
                className={styles.skillTags}
                aria-label={`${area.title} tools and technologies`}
              >
                {area.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
