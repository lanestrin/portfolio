import type { IconType } from "react-icons";
import {
    FiCheckCircle,
    FiCircle,
    FiHome,
    FiShoppingBag,
    FiShoppingCart,
    FiSliders,
} from "react-icons/fi";

import styles from "./ProductSystem.module.scss";

type ProductStatus = "available" | "active" | "planned";

type ProductExperience = {
    number: string;
    title: string;
    description: string;
    status: ProductStatus;
    statusLabel: string;
    icon: IconType;
};

type RoadmapColumn = {
    title: string;
    status: ProductStatus;
    items: string[];
    icon: IconType;
};

const productExperiences: ProductExperience[] = [
    {
        number: "01",
        title: "Shop TeamStore",
        description:
            "Browse the primary TeamStore catalog, view product details, and purchase undecorated merchandise directly from the platform.",
        status: "available",
        statusLabel: "Available",
        icon: FiShoppingCart,
    },
    {
        number: "02",
        title: "Shop Organization Stores",
        description:
            "Shop branded stores built for teams, clubs, schools, coaches, and other organizations.",
        status: "available",
        statusLabel: "Available",
        icon: FiHome,
    },
    {
        number: "03",
        title: "Create a Branded Store",
        description:
            "Choose colors, provide team information, select products, and generate a branded storefront through a guided setup experience.",
        status: "active",
        statusLabel: "In progress",
        icon: FiShoppingBag,
    },
    {
        number: "04",
        title: "Customize and Expand",
        description:
            "Upload artwork, replace products, use design templates, and further customize the store before launch.",
        status: "planned",
        statusLabel: "Planned",
        icon: FiSliders,
    },
];

const roadmapColumns: RoadmapColumn[] = [
    {
        title: "Available now",
        status: "available",
        icon: FiCheckCircle,
        items: [
            "Account experience",
            "Authentication flow",
            "Main ecommerce homepage",
            "Product detail pages",
            "Public organization stores",
            "Responsive foundation",
        ],
    },
    {
        title: "In active development",
        status: "active",
        icon: FiCircle,
        items: [
            "Create Store Wizard",
            "Brand color configuration",
            "Live storefront preview",
            "Product selection workflow",
            "Automated product previews",
        ],
    },
    {
        title: "Planned next",
        status: "planned",
        icon: FiCircle,
        items: [
            "Organization setup",
            "Store settings",
            "Draft persistence",
            "Review and publishing flow",
            "Artwork uploads",
            "Product and template customization",
            "Post-creation store management",
        ],
    },
];

export default function ProductSystem() {
    return (
        <section className={styles.productSystem}>
            <div className="container">
                <div className={styles.layout}>
                    <section
                        className={styles.experiences}
                        aria-labelledby="product-system-title"
                    >
                        <header className={styles.sectionHeader}>
                            <h2 id="product-system-title">
                                One platform, four connected experiences
                            </h2>
                        </header>

                        <ol className={styles.experienceList}>
                            {productExperiences.map(
                                ({
                                    number,
                                    title,
                                    description,
                                    status,
                                    statusLabel,
                                    icon: Icon,
                                }) => (
                                    <li
                                        key={number}
                                        className={`${styles.experience} ${styles[status]}`}
                                    >
                                        <span
                                            className={styles.experienceNumber}
                                            aria-hidden={true}
                                        >
                                            {number}
                                        </span>

                                        <span className={styles.experienceIcon}>
                                            <Icon aria-hidden={true} />
                                        </span>

                                        <div className={styles.experienceCopy}>
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>

                                        <span className={styles.statusBadge}>
                                            {statusLabel}
                                        </span>
                                    </li>
                                ),
                            )}
                        </ol>
                    </section>

                    <section
                        className={styles.roadmap}
                        aria-labelledby="roadmap-title"
                    >
                        <header className={styles.sectionHeader}>
                            <h2 id="roadmap-title">
                                What is ready, what is active, and what comes next
                            </h2>
                        </header>

                        <div className={styles.roadmapGrid}>
                            {roadmapColumns.map(
                                ({ title, status, items, icon: Icon }) => (
                                    <article
                                        key={title}
                                        className={`${styles.roadmapColumn} ${styles[status]}`}
                                    >
                                        <h3>{title}</h3>

                                        <ul aria-label={`${title} project items`}>
                                            {items.map((item) => (
                                                <li key={item}>
                                                    <Icon aria-hidden={true} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                ),
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}