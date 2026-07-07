import { resumeData } from "../../data/resumeData";
import styles from "./Certification.module.scss";

const Certifications = () => {
    return (
        <section className={styles.certifications}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>
                        Continuing Education
                    </span>

                    <h2>Certifications</h2>

                    <p>
                        Focused coursework across architecture, security, React,
                        and Next.js to support stronger application design and
                        frontend delivery.
                    </p>
                </div>

                <div className={styles.list}>
                    {resumeData.certifications.map((certification, index) => (
                        <article
                            key={certification.title}
                            className={styles.certification}
                        >
                            <span className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.body}>
                                <span className={styles.category}>
                                    {certification.category}
                                </span>

                                <h3>{certification.title}</h3>

                                <p>{certification.provider}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;