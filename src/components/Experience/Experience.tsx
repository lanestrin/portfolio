import styles from "./Experience.module.scss";

const positions = [
    {
        role: "Senior Application Developer",
        company: "Unrivaled Teamwear",
        period: "Nov 2024 — Present",
        meta: "Enterprise Web Applications",
        bullets: [
            "Build and maintain enterprise web applications supporting product customization, decoration workflows, ordering, and fulfillment operations.",
            "Develop scalable React, Next.js, and TypeScript interfaces with reusable components, shared utilities, and maintainable frontend patterns.",
            "Partner with product owners, designers, QA, and engineering teams to move features from concept through production release.",
            "Improve application consistency, frontend architecture, and delivery quality across business-critical user workflows.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Frontend Architecture"],
    },
    {
        role: "Developer Applications III",
        company: "Hanesbrands Inc.",
        period: "Jun 2022 — Nov 2024",
        meta: "Application Development",
        bullets: [
            "Developed enterprise React applications supporting internal business operations, commerce workflows, and large-scale application needs.",
            "Integrated REST APIs and platform services across frontend applications, including .NET MVC-backed systems, payment workflows, tax services, and Shopify API touchpoints.",
            "Implemented BDD and automated testing practices using Playwright and Jest to reduce regression risk and improve release confidence.",
            "Collaborated with Product, UX, QA, DevOps, and backend teams to deliver production-ready software in an enterprise environment.",
        ],
        stack: ["React", "REST APIs", ".NET MVC", "Playwright", "Jest"],
    },
    {
        role: "Research & Development Coordinator",
        company: "Champion Teamwear",
        period: "May 2016 — Jun 2022",
        meta: "Product + Process Innovation",
        bullets: [
            "Led research and process improvement initiatives across product development, manufacturing workflows, and internal business operations.",
            "Evaluated emerging technologies and workflow opportunities to improve efficiency, documentation, and cross-department collaboration.",
            "Worked closely with software developers and business stakeholders to improve internal applications, tooling, and operational processes.",
        ],
        stack: ["Process Improvement", "Product Development", "Research"],
    },
    {
        role: "UI / UX Designer",
        company: "Network Computer Solutions",
        period: "Jan 2014 — Present",
        meta: "Interface Design",
        bullets: [
            "Designed responsive interfaces and user experiences for web applications with a focus on clarity, layout, and usability.",
            "Collaborated with developers to translate visual concepts, user flows, and interface decisions into production-ready experiences.",
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

                    <h2>Professional Experience</h2>

                    <p>
                        A progression from design and product development into
                        enterprise frontend engineering.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {positions.map((position, index) => (
                        <article
                            key={`${position.company}-${position.role}`}
                            className={styles.position}
                        >
                            <div className={styles.marker}>
                                <span className={styles.index}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className={styles.dot} aria-hidden="true" />
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