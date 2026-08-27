import { FiDatabase, FiExternalLink } from "react-icons/fi";
import { SiReact, SiReactrouter, SiSass, SiTypescript, SiVite } from "react-icons/si";

import styles from "./CaseStudyFooter.module.scss";

const TEAMSTORE_URL = "https://teamstore-neon.vercel.app/demo";

const technologies = [
	{ label: "React", icon: SiReact, className: "react" },
	{ label: "TypeScript", icon: SiTypescript, className: "typescript" },
	{ label: "Vite", icon: SiVite, className: "vite" },
	{ label: "React Router", icon: SiReactrouter, className: "router" },
	{ label: "Convex", icon: FiDatabase, className: "convex" },
	{ label: "SCSS Modules", icon: SiSass, className: "sass" },
];

export default function CaseStudyFooter() {
	return (
		<section className={styles.closingSection} aria-labelledby="technology-title">
			<div className={`${styles.layout} container`}>
				<div className={styles.technology}>
					<header className={styles.header}>
						<h2 id="technology-title">TECHNOLOGY & ARCHITECTURE</h2>

						<p>
							Built with React, TypeScript, Vite, and Convex, with SCSS Modules for
							component-level styling and React Router handling application navigation.
						</p>
					</header>

					<ul className={styles.technologyList} aria-label="Technology stack">
						{technologies.map(({ label, icon: Icon, className }) => (
							<li key={label} className={`${styles.technologyItem} ${styles[className]}`}>
								<Icon aria-hidden={true} />
								<span>{label}</span>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.demo}>
					<h2>VIEW THE CURRENT BUILD</h2>

					<p>
						Try the completed shopping experience and see the current state of the Create
						Store Wizard.
					</p>

					<a
						className={styles.demoButton}
						href={TEAMSTORE_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						View Demo
						<FiExternalLink aria-hidden={true} />
					</a>
				</div>
			</div>
		</section>
	);
}
