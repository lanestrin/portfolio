export interface Profile {
	name: string;
	title: string;
	subTitle: string;
	summary: string;
	contact: {
		email: string;
		phone: string;
		phoneHref: string;
		location: string;
		portfolio?: string;
		github: string;
		linkedin: string;
	};
}

export const profile: Profile = {
	name: "Lan Nguyen",
	title: "Senior Software Engineer",
	subTitle: "Full-Stack Experience | Frontend Focus",
	summary:
		"Senior Software Engineer with 5+ years of experience in full-stack and frontend web application development using React, TypeScript, C#/.NET, and SQL. Experienced in modernizing enterprise applications, improving production workflows, and building customer-facing and internal tools. I bring a background in workflow automation and UI/UX design to create applications that are reliable, maintainable, and easy to use.",
	contact: {
		email: "ln.nguy3n@gmail.com",
		phone: "(913) 205-7926",
		phoneHref: "tel:+19132057926",
		location: "Olathe, Kansas",
		portfolio: "https://lan-nguyen-dev.vercel.app/case-study",
		github: "https://github.com/lanestrin",
		linkedin: "https://linkedin.com/in/lanestrin",
	},
};
