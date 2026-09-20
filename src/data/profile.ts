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
		"Senior software engineer with 12+ years of experience across software development, workflow automation, application modernization, and technical systems, including 5+ years focused on enterprise web application development. Experienced with React, TypeScript, C#/.NET, SQL, REST APIs, frontend architecture, third-party integrations, testing, and modernization of legacy applications. Strong background translating complex business workflows into reliable, maintainable software while preserving production stability. Currently expanding into AI-assisted and AI-enabled application development, with a focus on practical LLM integration, structured outputs, validation, and human-in-the-loop workflows.",
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
