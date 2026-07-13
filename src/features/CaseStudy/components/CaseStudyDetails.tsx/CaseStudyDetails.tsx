import type { IconType } from "react-icons";
import {
    FiArrowDown,
    FiCheck,
    FiCompass,
    FiDroplet,
    FiGrid,
    FiImage,
    FiLayers,
    FiPackage,
    FiSave,
    FiUsers,
} from "react-icons/fi";

import styles from "./CaseStudyDetails.module.scss";

type GenerationInput = {
    label: string;
    icon: IconType;
};

type SystemDecision = {
    title: string;
    description: string;
    icon: IconType;
};

const generationInputs: GenerationInput[] = [
    {
        label: "Team Colors",
        icon: FiDroplet,
    },
    {
        label: "Logo / Artwork",
        icon: FiImage,
    },
    {
        label: "Product",
        icon: FiPackage,
    },
    {
        label: "Template",
        icon: FiGrid,
    },
];

const systemDecisions: SystemDecision[] = [
    {
        title: "Organization-first ownership",
        description:
            "Stores belong to teams, clubs, and organizations rather than individual products or sessions.",
        icon: FiUsers,
    },
    {
        title: "Draft before publish",
        description:
            "Unfinished work is saved as draft data. Permanent stores are created only after review and publish.",
        icon: FiSave,
    },
    {
        title: "Guided creation experience",
        description:
            "Each step focuses on one decision and shows users how it affects their storefront.",
        icon: FiCompass,
    },
    {
        title: "One commerce system",
        description:
            "The central catalog and organization stores share the same commerce platform while supporting different experiences.",
        icon: FiLayers,
    },
];

const responsibilities = [
    "Product structure and user flows",
    "Responsive ecommerce interfaces",
    "Public storefront experiences",
    "Create Store Wizard and live preview",
    "Frontend architecture and typed state",
    "Product generation planning",
    "Store creation and publishing workflows",
];

export default function CaseStudyDetails() {
    return (
        <section
            className={styles.detailsSection}
            aria-labelledby="case-study-details-title"
        >
            <div className="container">
                <h2
                    id="case-study-details-title"
                    className={styles.visuallyHidden}
                >
                    TeamStore product and engineering details
                </h2>

                <div className={styles.cardGrid}>
                    <article className={styles.card}>
                        <h3 className={styles.cardTitle}>
                            Turning Brand Inputs into Merchandise
                        </h3>

                        <p className={styles.cardIntro}>
                            The product-generation system will combine organization
                            branding with selected catalog items to produce
                            storefront-ready merchandise previews.
                        </p>

                        <div
                            className={styles.generationFlow}
                            aria-label="Team colors, logo or artwork, product, and template create a branded product preview"
                        >
                            {generationInputs.map(({ label, icon: Icon }) => (
                                <div className={styles.flowColumn} key={label}>
                                    <div className={styles.flowInput}>
                                        <Icon aria-hidden={true} />
                                        <span>{label}</span>
                                    </div>

                                    <FiArrowDown
                                        className={styles.flowArrow}
                                        aria-hidden={true}
                                    />
                                </div>
                            ))}

                            <div className={styles.flowResult}>
                                <span>Branded Product</span>
                                <strong>Preview</strong>
                            </div>
                        </div>

                        <div className={styles.generationStatus}>
                            <p>
                                <strong className={styles.working}>
                                    Working now:
                                </strong>{" "}
                                Brand setup, guided navigation, color selection,
                                and live storefront styling.
                            </p>

                            <p>
                                <strong className={styles.developing}>
                                    Under development:
                                </strong>{" "}
                                Catalog mapping, artwork rules, product-generation
                                logic, and merchandise previews.
                            </p>
                        </div>
                    </article>

                    <article className={styles.card}>
                        <h3 className={styles.cardTitle}>
                            Designing the System Behind the Storefront
                        </h3>

                        <div className={styles.decisionList}>
                            {systemDecisions.map(
                                ({ title, description, icon: Icon }) => (
                                    <div
                                        className={styles.decision}
                                        key={title}
                                    >
                                        <span className={styles.decisionIcon}>
                                            <Icon aria-hidden={true} />
                                        </span>

                                        <div>
                                            <h4>{title}</h4>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </article>

                    <article className={styles.card}>
                        <h3 className={styles.cardTitle}>
                            Product Design &amp; Frontend Engineering
                        </h3>

                        <p className={styles.cardIntro}>
                            I am designing and building TeamStore as a real-world
                            portfolio product, focusing on clean architecture,
                            scalable components, and a strong user experience.
                        </p>

                        <ul className={styles.responsibilityList}>
                            {responsibilities.map((responsibility) => (
                                <li key={responsibility}>
                                    <span className={styles.checkIcon}>
                                        <FiCheck aria-hidden={true} />
                                    </span>

                                    <span>{responsibility}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}