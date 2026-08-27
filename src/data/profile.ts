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
		"Senior Software Engineer with 5+ years of experience in full-stack and frontend web application development. Specialized in modernizing enterprise architectures and building reliable, scalable systems utilizing React, TypeScript, C#/.NET, and SQL. Proven track record of combining workflow automation and intuitive UI/UX design to improve deployment efficiencies and user experiences.",
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
