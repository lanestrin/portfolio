import { resumeData } from "../../data/resumeData";
import styles from "./Education.module.scss";

const Education = () => {
    return (
        <section className={styles.education}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>
                        Academic Foundation
                    </span>

                    <h2>Education</h2>

                    <p>
                        A design-centered academic background that supports
                        interface judgment, visual communication, and
                        detail-oriented technical execution.
                    </p>
                </div>

                <div className={styles.list}>
                    {resumeData.education.map((item, index) => (
                        <article key={item.school} className={styles.school}>
                            <span className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.schoolBody}>
                                <div className={styles.schoolHeader}>
                                    <div>
                                        <span className={styles.focus}>
                                            {item.focus}
                                        </span>

                                        <h3>{item.school}</h3>

                                        <p>{item.degree}</p>
                                    </div>

                                    <span className={styles.period}>
                                        {item.period}
                                    </span>
                                </div>

                                <p className={styles.description}>
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;