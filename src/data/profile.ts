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
	title: "Senior Application Developer",
	subTitle: "Frontend Development | Full-Stack Experience",
	summary:
		"Full-stack application developer with strong frontend expertise, building and modernizing enterprise applications with React, TypeScript, C#/.NET, SQL, and REST APIs. I combine application development, workflow automation, and a design background to create reliable systems and intuitive user experiences.",
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
