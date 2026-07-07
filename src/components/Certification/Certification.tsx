import styles from "./Certification.module.scss";

const certifications = [
    {
        title: "Software Architecture & Technology of Large-Scale Systems",
        provider: "Udemy",
        category: "Architecture",
        description:
            "Coursework focused on scalable system design, architectural tradeoffs, and technology decisions for larger software systems.",
        tags: ["System Design", "Scalability", "Architecture"],
    },
    {
        title: "Software Architecture Security",
        provider: "Udemy",
        category: "Security",
        description:
            "Training focused on secure architecture concepts, application risk, and security considerations in software design.",
        tags: ["Security", "Application Risk", "Secure Design"],
    },
    {
        title: "Advanced React",
        provider: "Udemy",
        category: "Frontend",
        description:
            "Advanced React coursework covering component patterns, application structure, state management, and modern frontend practices.",
        tags: ["React", "Component Patterns", "Frontend"],
    },
    {
        title: "Next.js",
        provider: "Udemy",
        category: "Frontend",
        description:
            "Next.js coursework focused on React-based application development, routing, rendering patterns, and production-oriented web applications.",
        tags: ["Next.js", "React", "Web Applications"],
    },
];

const Certifications = () => {
    return (
        <section className={styles.certifications}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>
                        Professional Development
                    </span>

                    <div>
                        <h2>Certifications</h2>

                        <p>
                            Focused continuing education across architecture,
                            security, React, and Next.js to support stronger
                            application design and frontend delivery.
                        </p>
                    </div>
                </div>

                <div className={styles.list}>
                    {certifications.map((certification, index) => (
                        <article
                            key={certification.title}
                            className={styles.certification}
                        >
                            <span className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.body}>
                                <div className={styles.header}>
                                    <div>
                                        <span className={styles.category}>
                                            {certification.category}
                                        </span>

                                        <h3>{certification.title}</h3>

                                        <p className={styles.provider}>
                                            {certification.provider}
                                        </p>
                                    </div>
                                </div>

                                <p className={styles.description}>
                                    {certification.description}
                                </p>

                                <ul
                                    className={styles.tags}
                                    aria-label={`${certification.title} topics`}
                                >
                                    {certification.tags.map((tag) => (
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

export default Certifications;