import {
	FaArrowUpRightFromSquare,
	FaDownload,
	FaEnvelope,
	FaGithub,
	FaLinkedinIn,
	FaPhone,
} from "react-icons/fa6";

import { education, experience, profile, technicalSkills } from "../../data";
import styles from "./ResumePrint.module.scss";

const getOrganizationLabel = (organization: string[]) => {
	return organization.length > 1 ? "Organization Evolution" : "Early Interface Design";
};

interface ResumePrintProps {
	includePhone?: boolean;
}

const ResumePrint = ({ includePhone = false }: ResumePrintProps) => {
	const handlePrint = async () => {
		await document.fonts.ready;
		window.print();
	};

	return (
		<main className={styles.resumePrint}>
			<div className={styles.printToolbar}>
				<button type="button" className={styles.printButton} onClick={handlePrint}>
					<FaDownload aria-hidden="true" />
					<span>Download Resume</span>
				</button>
			</div>

			<section className={styles.page}>
				<header className={styles.header}>
					<div>
						<h1>{profile.name}</h1>
						<p className={styles.title}>{profile.title}</p>
					</div>

					<div className={styles.contact}>
						<a className={styles.contactItem} href={`mailto:${profile.contact.email}`}>
							<FaEnvelope className={styles.contactIcon} aria-hidden="true" />
							<span>{profile.contact.email}</span>
						</a>

						{includePhone && (
							<a className={styles.contactItem} href="tel:+19132057926">
								<FaPhone className={styles.contactIcon} aria-hidden="true" />
								<span>913-205-7926</span>
							</a>
						)}

						<a
							className={styles.contactItem}
							href={profile.contact.linkedin}
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedinIn className={styles.contactIcon} aria-hidden="true" />
							<span>linkedin.com/in/lanestrin</span>
						</a>

						<a
							className={styles.contactItem}
							href={profile.contact.github}
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub className={styles.contactIcon} aria-hidden="true" />
							<span>github.com/lanestrin</span>
						</a>

						{profile.contact.portfolio && (
							<a
								className={styles.contactItem}
								href={profile.contact.portfolio}
								target="_blank"
								rel="noreferrer"
							>
								<FaArrowUpRightFromSquare
									className={styles.contactIcon}
									aria-hidden="true"
								/>
								<span>lan-nguyen-dev.vercel.app</span>
							</a>
						)}
					</div>
				</header>

				<section className={styles.summary}>
					<p>{profile.summary}</p>
				</section>

				<section className={`${styles.section} ${styles.skillsSection}`}>
					<div className={styles.sectionTitle}>
						<h2>Technical Skills</h2>
					</div>

					<div className={styles.skillGroups} aria-label="Technical skills">
						{technicalSkills.map(({ title, tools }) => (
							<div key={title} className={styles.skillGroup}>
								<h3 className={styles.skillLabel}>{title}</h3>

								<ul className={styles.skillTags} aria-label={`${title} skills`}>
									{tools.map((tool) => (
										<li key={tool}>{tool}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.sectionTitle}>
						<h2>Professional Experience</h2>
					</div>

					<div className={styles.stack}>
						{experience.map((career, careerIndex) => (
							<section key={career.organization.join("-")} className={styles.organization}>
								<header className={styles.organizationHeader}>
									<div className={styles.organizationMeta}>
										<span className={styles.organizationNumber}>
											{String(careerIndex + 1).padStart(2, "0")}
										</span>
										<span className={styles.organizationSlash} aria-hidden="true">
											/
										</span>
										<span className={styles.organizationLabel}>
											{getOrganizationLabel(career.organization)}
										</span>
									</div>

									<ol
										className={styles.organizationProgress}
										aria-label="Organization progression"
									>
										{career.organization.map((company, index) => (
											<li key={company}>
												<span>{company}</span>
												{index < career.organization.length - 1 && (
													<span className={styles.transitionIcon} aria-hidden="true">
														→
													</span>
												)}
											</li>
										))}
									</ol>

									{career.description && (
										<p className={styles.organizationSummary}>{career.description}</p>
									)}
								</header>

								{career.roles.map((role) => (
									<article key={`${role.company}-${role.role}`} className={styles.job}>
										<div className={styles.jobHeader}>
											<div>
												<h3>{role.role}</h3>
												<p>
													{role.company} · {role.meta}
												</p>
											</div>
											<span>{role.period}</span>
										</div>

										{role.summary && <p className={styles.jobSummary}>{role.summary}</p>}

										<ul className={styles.bullets}>
											{role.bullets.map((bullet) => (
												<li key={bullet}>{bullet}</li>
											))}
										</ul>
									</article>
								))}
							</section>
						))}
					</div>
				</section>

				<section className={styles.section}>
					<div className={styles.sectionTitle}>
						<h2>Education</h2>
					</div>

					{education.map((item) => (
						<article key={item.school} className={styles.compactItem}>
							<h3>{item.school}</h3>

							<p>{item.degree}</p>
						</article>
					))}
				</section>
			</section>
		</main>
	);
};

export default ResumePrint;
