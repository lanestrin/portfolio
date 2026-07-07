import styles from "./Education.module.scss";

const schools = [
    {
        school: "Kansas State University",
        degree: "Bachelor of Fine Arts",
        period: "2004 — 2009",
        focus: "Visual Communication / Graphic Design",
        description:
            "Formal design foundation focused on visual communication, layout, typography, brand systems, and user-centered presentation.",
        tags: [
            "Visual Communication",
            "Graphic Design",
            "Typography",
            "Layout Systems",
        ],
    },
    {
        school: "Kansas City Kansas Community College",
        degree: "Associate of Applied Science",
        period: "2002 — 2004",
        focus: "Computer Aided Drafting",
        description:
            "Technical drafting background that strengthened precision, systems thinking, documentation, and detail-oriented production work.",
        tags: [
            "CAD",
            "Technical Drafting",
            "Documentation",
            "Precision",
        ],
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

                    <div>
                        <h2>Education</h2>

                        <p>
                            A design-centered academic background that supports
                            strong interface judgment, visual communication, and
                            detail-oriented technical execution.
                        </p>
                    </div>
                </div>

                <div className={styles.list}>
                    {schools.map((item, index) => (
                        <article key={item.school} className={styles.school}>
                            <span className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.schoolMain}>
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

                                <ul
                                    className={styles.tags}
                                    aria-label={`${item.school} areas of study`}
                                >
                                    {item.tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
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

export default Education;