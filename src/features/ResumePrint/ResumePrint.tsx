import { education, experience, profile, technicalSkills } from "../../data";
import styles from "./ResumePrint.module.scss";

const getOrganizationLabel = (organization: string[]) => {
	return organization.length > 1 ? "Organization Evolution" : "Early Interface Design";
};

const ResumePrint = () => {
	const handlePrint = async () => {
		await document.fonts.ready;
		window.print();
	};

	return (
		<main className={styles.resumePrint}>
			<div className={styles.printToolbar}>
				<button type="button" className={styles.printButton} onClick={handlePrint}>
					Download Resume
				</button>
			</div>

			<section className={styles.page}>
				<header className={styles.header}>
					<div>
						<p className={styles.eyebrow}>Portfolio / Resume</p>

						<h1>{profile.name}</h1>

						<p className={styles.title}>{profile.title}</p>
					</div>

					<div className={styles.contact}>
						<a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>

						<a href={profile.contact.phoneHref}>{profile.contact.phone}</a>

						<a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
							linkedin.com/in/lanestrin
						</a>

						<a href={profile.contact.portfolio} target="_blank" rel="noreferrer">
							lan-nguyen-dev.vercel.app/case-study
						</a>
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
						{experience.map((career, careerIndex) => {
							const [firstRole, ...remainingRoles] = career.roles;

							return (
								<section
									key={career.organization.join("-")}
									className={styles.organization}
								>
									<div className={styles.organizationIntro}>
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
															<span
																className={styles.transitionIcon}
																aria-hidden="true"
															>
																→
															</span>
														)}
													</li>
												))}
											</ol>

											{career.description && (
												<p className={styles.organizationSummary}>
													{career.description}
												</p>
											)}
										</header>

										{firstRole && (
											<article
												className={styles.job}
												key={`${firstRole.company}-${firstRole.role}`}
											>
												<div className={styles.jobHeader}>
													<div>
														<h3>{firstRole.role}</h3>

														<p>
															{firstRole.company} · {firstRole.meta}
														</p>
													</div>

													<span>{firstRole.period}</span>
												</div>

												<ul className={styles.bullets}>
													{firstRole.bullets.map((bullet) => (
														<li key={bullet}>{bullet}</li>
													))}
												</ul>

												<ul
													className={styles.stackList}
													aria-label={`${firstRole.role} skills`}
												>
													{firstRole.stack.map((item) => (
														<li key={item}>{item}</li>
													))}
												</ul>
											</article>
										)}
									</div>

									{remainingRoles.map((role) => (
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

											<ul className={styles.bullets}>
												{role.bullets.map((bullet) => (
													<li key={bullet}>{bullet}</li>
												))}
											</ul>

											<ul
												className={styles.stackList}
												aria-label={`${role.role} skills`}
											>
												{role.stack.map((item) => (
													<li key={item}>{item}</li>
												))}
											</ul>
										</article>
									))}
								</section>
							);
						})}
					</div>
				</section>

				<section className={styles.twoColumn}>
					<section className={styles.section}>
						<div className={styles.sectionTitle}>
							<h2>Education</h2>
						</div>

						{education.map((item) => (
							<article key={item.school} className={styles.compactItem}>
								<h3>{item.school}</h3>

								<p>{item.degree}</p>

								<span>{item.period}</span>
							</article>
						))}
					</section>
				</section>
			</section>
		</main>
	);
};

export default ResumePrint;
