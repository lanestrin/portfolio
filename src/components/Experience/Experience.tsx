import styles from "./Experience.module.scss";

const positions = [
    {
        role: "Senior Application Developer",
        company: "Unrivaled Teamwear",
        period: "Nov 2024 — Present",
        meta: "Enterprise Web Applications",
        bullets: [
            "Develop and maintain enterprise web applications supporting product customization, decoration, and order fulfillment.",
            "Build modern applications using React, Next.js, TypeScript, and contemporary frontend technologies.",
            "Collaborate with product owners, designers, QA, and engineering teams to deliver features from concept through deployment.",
            "Improve frontend architecture through reusable components, shared utilities, and scalable design patterns.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Frontend Architecture"],
    },
    {
        role: "Developer Applications III",
        company: "Hanesbrands Inc.",
        period: "Jun 2022 — Nov 2024",
        meta: "Application Development",
        bullets: [
            "Developed enterprise React applications supporting internal business operations.",
            "Implemented Behavior Driven Development practices using Playwright and Jest.",
            "Integrated REST APIs and optimized frontend performance for large-scale applications.",
            "Partnered with Product, UX, QA, and DevOps teams to deliver production-ready software.",
        ],
        stack: ["React", "REST APIs", "Playwright", "Jest"],
    },
    {
        role: "Research & Development Coordinator",
        company: "Champion Teamwear",
        period: "May 2016 — Jun 2022",
        meta: "Product + Process Innovation",
        bullets: [
            "Led research and process improvement initiatives spanning product development and manufacturing.",
            "Evaluated emerging technologies and implemented workflow improvements across departments.",
            "Worked closely with software developers to improve internal applications and business processes.",
        ],
        stack: ["Process Improvement", "Product Development", "Research"],
    },
    {
        role: "UI / UX Designer",
        company: "Network Computer Solutions",
        period: "Jan 2014 — Present",
        meta: "Interface Design",
        bullets: [
            "Designed responsive interfaces and user experiences for web applications.",
            "Collaborated with developers to transform design concepts into production-ready interfaces.",
        ],
        stack: ["UI Design", "UX Design", "Responsive Design"],
    },
];

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>Career Record</span>

                    <div>
                        <h2>Professional Experience</h2>
                        <p>
                            A progression from design and product development into
                            enterprise frontend engineering.
                        </p>
                    </div>
                </div>

                <div className={styles.timeline}>
                    {positions.map((position, index) => (
                        <article key={`${position.company}-${position.role}`} className={styles.position}>
                            <div className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className={styles.body}>
                                <div className={styles.positionHeader}>
                                    <div>
                                        <span className={styles.meta}>{position.meta}</span>
                                        <h3>{position.role}</h3>
                                        <p>{position.company}</p>
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

                                <ul className={styles.stackList} aria-label={`${position.role} skills`}>
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