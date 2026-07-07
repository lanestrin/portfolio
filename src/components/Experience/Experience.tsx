import styles from "./Experience.module.scss";

const positions = [
    {
        role: "Senior Application Developer",
        company: "Unrivaled Teamwear",
        period: "Nov 2024 — Present",
        meta: "Enterprise Web Applications",
        bullets: [
            "Supported the migration of the graphic engine and Pulse API to a new server, validating functionality across environments and helping ensure application continuity during infrastructure changes.",
            "Led a major checkout page refactor for Coach’s Assistant, resolving payment-processing issues where payment methods could process twice or fail to create orders after payment was taken.",
            "Converted legacy .NET MVC frontend workflows to React and TypeScript to improve UI/UX, stabilize checkout behavior, and make the application easier to maintain.",
            "Contributed to modernization planning for transitioning legacy .NET MVC architecture toward updated .NET backend services and a Vite-powered frontend.",
        ],
        stack: ["React", "TypeScript", ".NET MVC", "Pulse API", "Vite"],
    },
    {
        role: "Developer Applications III",
        company: "Hanesbrands Inc.",
        period: "Jun 2022 — Nov 2024",
        meta: "Application Development",
        bullets: [
            "Implemented Adyen payment processing improvements for commerce workflows, supporting more reliable payment handling across enterprise application releases.",
            "Integrated and supported payment, tax, and platform services across React applications, including Adyen, tax API implementations, Shopify API touchpoints, G4, and Cookies plugin work.",
            "Developed enterprise React applications connected to REST APIs and .NET MVC-backed systems supporting internal operations and customer-facing commerce workflows.",
            "Implemented BDD and automated testing practices with Playwright and Jest to protect critical user flows and improve release confidence.",
        ],
        stack: ["React", "REST APIs", ".NET MVC", "Adyen", "Playwright"],
    },
    {
        role: "Research & Development Coordinator",
        company: "Champion Teamwear",
        period: "May 2016 — Jun 2022",
        meta: "Product + Process Innovation",
        bullets: [
            "Led research and process improvement initiatives across product development, manufacturing workflows, and internal business operations.",
            "Evaluated emerging technologies and workflow opportunities to improve efficiency, documentation, and cross-department collaboration.",
            "Partnered with software developers and business stakeholders to improve internal tools, operational processes, and application workflows.",
        ],
        stack: ["Process Improvement", "Product Development", "Research"],
    },
    {
        role: "UI / UX Designer",
        company: "Network Computer Solutions",
        period: "Jan 2014 — Present",
        meta: "Interface Design",
        bullets: [
            "Designed responsive interfaces and user experiences for web applications with a focus on layout, clarity, usability, and visual hierarchy.",
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