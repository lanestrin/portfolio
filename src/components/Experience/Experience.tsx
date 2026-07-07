import { resumeData } from "../../data/resumeData";
import styles from "./Experience.module.scss";

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Career Record</span>

                    <h2>Professional Experience</h2>

                    <p>
                        A progression from design and product development into
                        enterprise frontend engineering.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {resumeData.experience.map((position, index) => (
                        <article
                            key={`${position.company}-${position.role}`}
                            className={styles.position}
                        >
                            <div className={styles.marker}>
                                <span className={styles.index}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className={styles.dot}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className={styles.body}>
                                <div className={styles.positionHeader}>
                                    <div>
                                        <h3>{position.role}</h3>

                                        <p>
                                            <span>{position.company}</span>
                                            <span aria-hidden="true">•</span>
                                            <span>{position.meta}</span>
                                        </p>
                                    </div>

                                    <span className={styles.period}>
                                        {position.period}
                                    </span>
                                </div>

                                <ul className={styles.bullets}>
                                    {position.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>

                                <ul
                                    className={styles.stackList}
                                    aria-label={`${position.role} skills`}
                                >
                                    {position.stack.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;