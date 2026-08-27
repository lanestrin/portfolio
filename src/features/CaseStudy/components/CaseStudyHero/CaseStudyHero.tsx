import { FiExternalLink } from "react-icons/fi";

import { images } from "../../../../assets/images";
import styles from "./CaseStudyHero.module.scss";

const TEAMSTORE_URL = "https://teamstore-neon.vercel.app";

export default function CaseStudyHero() {
	return (
		<main className={styles.caseStudy}>
			<section className={`${styles.hero} container`} aria-labelledby="teamstore-title">
				<div className={styles.heroHeading}>
					<p className={styles.eyebrow}>Active portfolio project</p>

					<h1 id="teamstore-title" className={styles.title}>
						TeamStore
					</h1>
				</div>

				<div className={styles.heroLayout}>
					<div className={styles.heroContent}>
						<p className={styles.subtitle}>
							A multi-store commerce platform where teams and organizations can shop
							merchandise and launch their own branded storefronts.
						</p>

						<div className={styles.description}>
							<p>
								TeamStore combines a central ecommerce catalog with organization-owned
								stores for teams, clubs, schools, and coaches.
							</p>

							<p>
								The core shopping experience and public storefronts are available now. I am
								currently building the Create Store Wizard, which lets organizations choose
								their colors, branding, products, and storefront settings before publishing.
							</p>
						</div>

						<div className={styles.actions}>
							<a
								className={styles.primaryButton}
								href={TEAMSTORE_URL}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Demo
								<FiExternalLink aria-hidden={true} />
							</a>
						</div>

						<ul className={styles.statusList} aria-label="Project status">
							<li className={styles.available}>Core commerce available</li>

							<li className={styles.inProgress}>Store creation in active development</li>
						</ul>
					</div>

					<figure id="teamstore-preview" className={styles.preview}>
						<img
							src={images.caseStudy.eStore}
							alt="TeamStore ecommerce homepage featuring branded team apparel"
						/>
					</figure>
				</div>
			</section>
		</main>
	);
}
