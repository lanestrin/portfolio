import { HiArrowLongRight } from "react-icons/hi2";

import { resumeData } from "../../data/resumeData";
import styles from "./Experience.module.scss";

const getEndYearMarker = (period: string) => {
  const endDate = period.split("—").pop()?.trim();

  if (!endDate) {
    return "";
  }

  if (endDate.toLowerCase() === "present") {
    return "Now";
  }

  const yearMatch = endDate.match(/\d{4}/);

  return yearMatch ? yearMatch[0] : endDate;
};

const getOrganizationLabel = (organization: string[]) => {
  if (organization.length > 1) {
    return "Organization Evolution";
  }

  return "Early Interface Design";
};

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Career Record</span>

          <h2>Professional Experience</h2>
        </div>

        <div className={styles.timeline}>
          {resumeData.experience.map((career, careerIndex) => (
            <div
              key={career.organization.join("-")}
              className={styles.organization}
            >
              <div className={styles.organizationHeader}>
                <div className={styles.organizationMeta}>
                  <span className={styles.organizationNumber}>
                    {String(careerIndex + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.organizationSlash} aria-hidden="true">
                    /
                  </span>

                  <span className={styles.organizationLabel}>
                    {getOrganizationLabel(career.organization)}
                  </span>
                </div>

                <ol
                  className={styles.organizationProgress}
                  aria-label="Organization progression"
                >
                  {career.organization.map((company, index) => (
                    <li key={company}>
                      <span>{company}</span>

                      {index < career.organization.length - 1 && (
                        <HiArrowLongRight
                          className={styles.transitionIcon}
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>

                {career.description && (
                  <p className={styles.organizationSummary}>
                    {career.description}
                  </p>
                )}
              </div>

              {career.roles.map((role) => (
                <article
                  key={`${role.company}-${role.role}`}
                  className={styles.position}
                >
                  <div className={styles.marker}>
                    <span className={styles.index}>
                      {getEndYearMarker(role.period)}
                    </span>

                    <span className={styles.dot} aria-hidden="true" />
                  </div>

                  <div className={styles.body}>
                    <div className={styles.positionHeader}>
                      <div>
                        <h3>{role.role}</h3>

                        <p>
                          <span>{role.company}</span>

                          <span aria-hidden="true">•</span>

                          <span>{role.meta}</span>
                        </p>
                      </div>

                      <span className={styles.period}>{role.period}</span>
                    </div>

                    <ul className={styles.bullets}>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <ul
                      className={styles.stackList}
                      aria-label={`${role.role} skills`}
                    >
                      {role.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
