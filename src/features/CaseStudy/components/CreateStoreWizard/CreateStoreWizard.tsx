import { images } from "../../../../assets/images";
import styles from "./CreateStoreWizard.module.scss";

const steps = [
	{
		number: "01",
		label: "Brand",
		title: "Choose team colors",
		description:
			"Organizations can start with popular color combinations or define their own. A live storefront preview shows how those colors carry through the experience before they move on.",
		image: images.caseStudy.eStoreWizard1,
		alt: "TeamStore Create Store Wizard showing team color presets, custom color controls, and a live storefront preview",
	},
	{
		number: "02",
		label: "Artwork",
		title: "Customize your artwork",
		description:
			"Teams can use built-in templates or upload finished art. I built an interactive editor that lets users personalize template content and reposition individual artwork elements with immediate visual feedback.",
		image: images.caseStudy.eStoreWizard2,
		alt: "TeamStore artwork editor showing editable organization text, mascot artwork, and position controls",
	},
	{
		number: "03",
		label: "Products",
		title: "Bring it to life on products",
		description:
			"Selected artwork can then be placed directly onto merchandise. Users can move and resize the design on each product so placement can be tuned before the item is added to the store.",
		image: images.caseStudy.eStoreWizard3,
		alt: "TeamStore product editor showing custom artwork positioned on a black and purple cap",
	},
];

export default function CreateStoreWizard() {
	return (
		<section className={styles.wizardSection} aria-labelledby="create-store-wizard-title">
			<div className="container">
				<header className={styles.sectionHeader}>
					<div className={styles.headingGroup}>
						<p className={styles.eyebrow}>The Create Store experience</p>

						<h2 id="create-store-wizard-title" className={styles.title}>
							From team identity to a live storefront.
						</h2>
					</div>

					<div className={styles.intro}>
						<p>
							I&apos;m building a guided, step-by-step workflow that turns an
							organization&apos;s brand choices into a merch-ready storefront — from team
							colors and artwork to product customization and final review.
						</p>

						<span className={styles.statusBadge}>
							<span className={styles.statusDot} aria-hidden="true" />
							In active development
						</span>
					</div>
				</header>

				<div className={styles.steps}>
					{steps.map((step) => (
						<article className={styles.step} key={step.number}>
							<div className={styles.stepCopy}>
								<div className={styles.stepMeta}>
									<span className={styles.stepNumber}>{step.number}</span>
									<span className={styles.stepLabel}>{step.label}</span>
								</div>

								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</div>

							<figure className={styles.preview}>
								<img src={step.image} alt={step.alt} loading="lazy" />
							</figure>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
