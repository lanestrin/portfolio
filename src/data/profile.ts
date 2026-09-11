export interface Profile {
	name: string;
	title: string;
	subTitle: string;
	summary: string;
	contact: {
		email: string;
		location: string;
		portfolio?: string;
		github: string;
		linkedin: string;
	};
}

export const profile: Profile = {
	name: "Lan Nguyen",
	title: "Software Developer",
	subTitle: "Full-Stack Experience | Frontend Focus | Modernization & Integrations",
	summary:
		"Software developer with 5+ years of experience building and modernizing enterprise web applications using React, TypeScript, C#/.NET, SQL, and REST APIs. Experienced in frontend architecture, application modernization, third-party API integration, dependency modernization, testing, and workflow automation. Background in UI/UX and production systems, with a track record of translating complex business workflows into reliable, maintainable software.",
	contact: {
		email: "ln.nguy3n@gmail.com",
		location: "Olathe, Kansas",
		portfolio: "https://lan-nguyen-dev.vercel.app",
		github: "https://github.com/lanestrin",
		linkedin: "https://linkedin.com/in/lanestrin",
	},
};
