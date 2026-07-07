import styles from "./Education.module.scss";

const schools = [
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
                    {schools.map((item, index) => (
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