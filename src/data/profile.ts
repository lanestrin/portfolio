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
		"Senior Software Engineer with 5+ years of experience building and modernizing enterprise web applications, with a frontend focus in React and TypeScript and hands-on experience with C#/.NET and SQL. Strong in application modernization, frontend architecture, and workflow automation. Experienced in diagnosing performance and reliability problems in legacy systems and translating complex business workflows into maintainable, user-friendly applications.",
	contact: {
		email: "ln.nguy3n@gmail.com",
		phone: "(913) 205-7926",
		phoneHref: "tel:+19132057926",
		location: "Olathe, Kansas",
		portfolio: "https://lan-nguyen-dev.vercel.app",
		github: "https://github.com/lanestrin",
		linkedin: "https://linkedin.com/in/lanestrin",
	},
};
