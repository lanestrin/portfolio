import styles from "./Expertise.module.scss";

const proofPoints = [
    {
        label: "Primary Focus",
        value: "Frontend Architecture",
    },
    {
        label: "Integration Strength",
        value: "Commerce + APIs",
    },
    {
        label: "Differentiator",
        value: "Design + Engineering",
    },
];

const expertiseAreas = [
    {
        title: "Frontend Engineering",
        description:
            "Build maintainable, responsive React and Next.js interfaces for complex enterprise workflows, with a focus on component architecture, state management, and scalable UI patterns.",
        tools: [
            "React",
            "Next.js",
            "TypeScript",
            "React Query",
            "SCSS",
        ],
    },
    {
        title: "API & Platform Integration",
        description:
            "Connect user-facing applications to business-critical services across commerce, payments, tax, and internal platforms, including .NET MVC systems, Adyen payment workflows, Shopify APIs, tax API implementations, and REST-based integrations.",
        tools: [
            ".NET",
            ".NET MVC",
            "REST APIs",
            "Adyen",
            "Tax APIs",
            "Shopify API",
        ],
    },
    {
        title: "Testing & Reliability",
        description:
            "Use automated testing and BDD practices to protect critical user flows, reduce regressions, and support confident releases.",
        tools: [
            "Playwright",
            "Jest",
            "BDD",
            "Regression Testing",
        ],
    },
    {
        title: "Delivery Workflow",
        description:
            "Work inside modern engineering delivery systems, from version control and agile planning through CI/CD workflows and production release coordination.",
        tools: [
            "Azure DevOps",
            "Git",
            "CI/CD",
            "Agile Delivery",
        ],
    },
    {
        title: "Design-Informed Development",
        description:
            "Translate UX intent into production-ready interfaces with strong judgment around hierarchy, spacing, responsiveness, accessibility, and usability.",
        tools: [
            "Figma",
            "UI Design",
            "UX Design",
            "Responsive Design",
        ],
    },
];

const TechnicalExpertise = () => {
    return (
        <section className={styles.expertise}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionKicker}>
                        Technical Range
                    </span>

                    <div>
                        <h2>Technical Expertise</h2>

                        <p>
                            Frontend-focused engineering with the testing, API,
                            delivery, commerce, and design fluency needed to
                            ship polished enterprise applications.
                        </p>
                    </div>
                </div>

                <div className={styles.proofStrip} aria-label="Technical summary">
                    {proofPoints.map((point) => (
                        <div key={point.label} className={styles.proofItem}>
                            <span>{point.label}</span>
                            <strong>{point.value}</strong>
                        </div>
                    ))}
                </div>

                <div className={styles.list}>
                    {expertiseAreas.map((area, index) => (
                        <article key={area.title} className={styles.row}>
                            <span className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.rowTitle}>
                                <h3>{area.title}</h3>
                            </div>

                            <div className={styles.rowBody}>
                                <p>{area.description}</p>

                                <ul
                                    className={styles.tools}
                                    aria-label={`${area.title} tools and technologies`}
                                >
                                    {area.tools.map((tool) => (
                                        <li key={tool}>{tool}</li>
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

export default TechnicalExpertise;