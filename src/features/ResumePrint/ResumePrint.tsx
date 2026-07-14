import { resumeData } from "../../data/resumeData";
import styles from "./ResumePrint.module.scss";

const getOrganizationLabel = (organization: string[]) => {
    return organization.length > 1
        ? "Organization Evolution"
        : "Early Interface Design";
};

const ResumePrint = () => {
    const { profile, experience, expertise, education } = resumeData;
    const handlePrint = () => { window.print()};


    return (
        <main className={styles.resumePrint}>
            <div className={styles.printToolbar}>
                <button
                    type="button"
                    className={styles.printButton}
                    onClick={handlePrint}
                >
                    Download Resume
                </button>
            </div>
            <section className={styles.page}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.eyebrow}>Portfolio / Resume</p>

                        <h1>{profile.name}</h1>

                        <p className={styles.title}>{profile.title}</p>
                    </div>

                    <div className={styles.contact}>
                        <a href={`mailto:${profile.contact.email}`}>
                            {profile.contact.email}
                        </a>

                        <a href={profile.contact.phoneHref}>
                            {profile.contact.phone}
                        </a>

                        <a
                            href={profile.contact.portfolio}
                            target="_blank"
                            rel="noreferrer"
                        >
                            lan-nguyen-dev.vercel.app
                        </a>

                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/lanestrin
                        </a>
                    </div>
                </header>

                <section className={styles.summary}>
                    <p>{profile.summary}</p>
                </section>

                {/* EXPERIENCE */}

                <section className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <h2>Professional Experience</h2>
                    </div>

                    <div className={styles.stack}>
                        {experience.map((career, careerIndex) => {
                            const [firstRole, ...remainingRoles] = career.roles;

                            return (
                                <section
                                    key={career.organization.join("-")}
                                    className={styles.organization}
                                >
                                    <div className={styles.organizationIntro}>
                                        <header className={styles.organizationHeader}>
                                            <div className={styles.organizationMeta}>
                                                <span className={styles.organizationNumber}>
                                                    {String(careerIndex + 1).padStart(2, "0")}
                                                </span>

                                                <span className={styles.organizationSlash}>
                                                    /
                                                </span>

                                                <span className={styles.organizationLabel}>
                                                    {getOrganizationLabel(
                                                        career.organization
                                                    )}
                                                </span>
                                            </div>

                                            <ol
                                                className={styles.organizationProgress}
                                                aria-label="Organization progression"
                                            >
                                                {career.organization.map(
                                                    (company, index) => (
                                                        <li key={company}>
                                                            <span>{company}</span>

                                                            {index < career.organization.length - 1 && (
                                                                <span className={styles.transitionIcon} aria-hidden="true"> → </span>
                                                                )}
                                                        </li>
                                                    )
                                                )}
                                            </ol>

                                            {career.description && (
                                                <p
                                                    className={
                                                        styles.organizationSummary
                                                    }
                                                >
                                                    {career.description}
                                                </p>
                                            )}
                                        </header>

                                        {firstRole && (
                                            <article
                                                className={styles.job}
                                                key={`${firstRole.company}-${firstRole.role}`}
                                            >
                                                <div className={styles.jobHeader}>
                                                    <div>
                                                        <h3>{firstRole.role}</h3>

                                                        <p>
                                                            {firstRole.company} ·{" "}
                                                            {firstRole.meta}
                                                        </p>
                                                    </div>

                                                    <span>{firstRole.period}</span>
                                                </div>

                                                <ul>
                                                    {firstRole.bullets.map(
                                                        (bullet) => (
                                                            <li key={bullet}>
                                                                {bullet}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>

                                                <div className={styles.tags}>
                                                    {firstRole.stack.map(
                                                        (item) => (
                                                            <span key={item}>
                                                                {item}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </article>
                                        )}
                                    </div>

                                    {remainingRoles.map((role) => (
                                        <article
                                            key={`${role.company}-${role.role}`}
                                            className={styles.job}
                                        >
                                            <div className={styles.jobHeader}>
                                                <div>
                                                    <h3>{role.role}</h3>

                                                    <p>
                                                        {role.company} · {role.meta}
                                                    </p>
                                                </div>

                                                <span>{role.period}</span>
                                            </div>

                                            <ul>
                                                {role.bullets.map((bullet) => (
                                                    <li key={bullet}>{bullet}</li>
                                                ))}
                                            </ul>

                                            <div className={styles.tags}>
                                                {role.stack.map((item) => (
                                                    <span key={item}>{item}</span>
                                                ))}
                                            </div>
                                        </article>
                                    ))}
                                </section>
                            );
                        })}
                    </div>
                </section>

                {/* TECHNICAL EXPERTISE */}

                <section className={styles.section}>
                    <div className={styles.sectionTitle}>
                        <h2>Technical Expertise</h2>
                    </div>

                    <div className={styles.skillsGrid}>
                        {expertise.map((area) => (
                            <article key={area.title}>
                                <h3>{area.title}</h3>

                                <p>{area.description}</p>

                                <div className={styles.tags}>
                                    {area.tools.map((tool) => (
                                        <span key={tool}>{tool}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* EDUCATION */}

                <section className={styles.twoColumn}>
                    <section className={styles.section}>
                        <div className={styles.sectionTitle}>
                            <h2>Education</h2>
                        </div>

                        {education.map((item) => (
                            <article
                                key={item.school}
                                className={styles.compactItem}
                            >
                                <h3>{item.school}</h3>

                                <p>{item.degree}</p>

                                <span>{item.period}</span>
                            </article>
                        ))}
                    </section>
                </section>
            </section>
        </main>
    );
};

export default ResumePrint;