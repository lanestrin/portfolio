import { images } from "../../../../assets/images";
import styles from "./CreateStoreWizard.module.scss";

export default function CreateStoreWizard() {
	return (
		<section className={styles.wizardSection} aria-labelledby="create-store-wizard-title">
			<div className={`${styles.layout} container`}>
				<header className={styles.content}>
					<p className={styles.eyebrow}>Current focus</p>

					<h2 id="create-store-wizard-title" className={styles.title}>
						Building the Create Store Wizard
					</h2>

					<div className={styles.description}>
						<p>
							The Create Store Wizard guides an organization through the steps required to
							configure and publish its storefront.
						</p>

						<p>
							Users select colors, define their organization, choose products, configure
							settings, and publish when ready.
						</p>

						<div className={styles.developmentStatus}>
							<span className={styles.statusBadge}>
								<span className={styles.statusDot} aria-hidden="true" />
								In active development
							</span>
						</div>
					</div>
				</header>

				<figure className={styles.preview}>
					<img
						src={images.caseStudy.eStoreWizard}
						alt="TeamStore Create Store Wizard showing team color controls and a live storefront preview"
					/>
				</figure>
			</div>
		</section>
	);
}
