import { FaCode, FaPenNib, FaPlug } from "react-icons/fa6";

import styles from "./Expertise.module.scss";
import { resumeData } from "../../data/resumeData";

const proofPoints = [
    {
        label: "Primary Focus",
        value: "Frontend Architecture",
        icon: FaCode,
    },
    {
        label: "Integration Strength",
        value: "Commerce Systems + APIs",
        icon: FaPlug,
    },
    {
        label: "Differentiator",
        value: "Design + Engineering",
        icon: FaPenNib,
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

                    <h2>Technical Expertise</h2>

                    <p>
                        Frontend-focused engineering with the testing, API,
                        delivery, commerce, and design fluency needed to ship
                        polished enterprise applications.
                    </p>
                </div>

                <div
                    className={styles.proofStrip}
                    aria-label="Technical summary"
                >
                    {proofPoints.map(({ label, value, icon: Icon }) => (
                        <div key={label} className={styles.proofItem}>
                            <span
                                className={styles.proofIcon}
                                aria-hidden="true"
                            >
                                <Icon />
                            </span>

                            <div>
                                <span className={styles.proofLabel}>
                                    {label}
                                </span>

                                <strong>{value}</strong>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.list}>
                    {resumeData.expertise.map((area, index) => (
                        <article key={area.title} className={styles.row}>
                            <span className={styles.index}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className={styles.rowTitle}>
                                <h3>{area.title}</h3>
                            </div>

                            <div className={styles.rowBody}>
                                <p>{area.description}</p>
                            </div>

                            <ul
                                className={styles.tools}
                                aria-label={`${area.title} tools and technologies`}
                            >
                                {area.tools.map((tool) => (
                                    <li key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalExpertise;