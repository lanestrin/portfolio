import styles from "./WizardProgress.module.scss";

type StepStatus = "complete" | "active" | "upcoming";

type WizardStep = {
    number: string;
    title: string;
    description: string;
    status: StepStatus;
    statusLabel: string;
};

const wizardSteps: WizardStep[] = [
    {
        number: "01",
        title: "Team Branding",
        description: "Choose colors and establish the store identity.",
        status: "complete",
        statusLabel: "Complete",
    },
    {
        number: "02",
        title: "Organization",
        description: "Define the team, club, school, or organization.",
        status: "complete",
        statusLabel: "Complete",
    },
    {
        number: "03",
        title: "Products",
        description: "Select merchandise and generate branded previews.",
        status: "active",
        statusLabel: "In progress",
    },
    {
        number: "04",
        title: "Store Settings",
        description: "Configure store details, dates, shipping, and more.",
        status: "upcoming",
        statusLabel: "Upcoming",
    },
    {
        number: "05",
        title: "Review & Publish",
        description: "Review the storefront and publish the store.",
        status: "upcoming",
        statusLabel: "Upcoming",
    },
];

export default function WizardProgress() {
    return (
        <section
            className={styles.wizardProgress}
            aria-labelledby="wizard-progress-title"
        >
            <div className="container">
                <h2
                    id="wizard-progress-title"
                    className={styles.visuallyHidden}
                >
                    Create Store Wizard progress
                </h2>

                <ol className={styles.stepGrid}>
                    {wizardSteps.map(
                        ({
                            number,
                            title,
                            description,
                            status,
                            statusLabel,
                        }) => (
                            <li
                                key={number}
                                className={`${styles.stepCard} ${styles[status]}`}
                            >
                                <div className={styles.stepHeader}>
                                    <span className={styles.stepNumber}>
                                        {number}
                                    </span>

                                    <span className={styles.statusBadge}>
                                        {statusLabel}
                                    </span>
                                </div>

                                <h3>{title}</h3>

                                <p>{description}</p>
                            </li>
                        ),
                    )}
                </ol>
            </div>
        </section>
    );
}