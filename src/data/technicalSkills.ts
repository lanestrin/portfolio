export interface TechnicalSkill {
	title: string;
	description: string;
	tools: string[];
}

export const technicalSkills: TechnicalSkill[] = [
	{
		title: "Languages",
		description:
			"Build production web applications with strongly typed frontend and backend code, semantic markup, and maintainable styling systems.",
		tools: ["TypeScript", "JavaScript", "C#", "SQL", "HTML", "CSS", "SCSS"],
	},
	{
		title: "Frontend",
		description:
			"Design and modernize maintainable interfaces for complex commerce and enterprise workflows with reusable components, predictable state, responsive behavior, and accessible UI patterns.",
		tools: [
			"TypeScript",
			"React",
			"Next.js",
			"Three.js",
			"Vue.js",
			"React Query",
			"React Context",
			"Vite",
			"CSS",
			"SCSS",
			"Sass",
			"HTML",
			"jQuery",
			"UI/UX",
			"Responsive Design",
			"Accessibility",
		],
	},
	{
		title: "Backend, Data & APIs",
		description:
			"Support full-stack applications with C# and .NET services, SQL-backed workflows, REST integrations, and reactive backend platforms for data, authentication, and real-time updates.",
		tools: ["C#", ".NET", ".NET MVC", "Node.js", "Express.js", "REST APIs", "SQL", "Convex"],
	},
	{
		title: "Testing",
		description:
			"Use end-to-end, unit, integration, and browser automation testing to protect critical workflows and reduce regression risk across production applications.",
		tools: [
			"Playwright",
			"Jest",
			"Cypress",
			"Selenium",
			"End-to-End Testing",
			"Unit Testing",
			"Integration Testing",
		],
	},
	{
		title: "Commerce & Integrations",
		description:
			"Implement payment, commerce, tax, and analytics integrations that translate complex business rules into dependable customer and internal workflows.",
		tools: ["Adyen", "Shopify API", "Tax APIs", "Vertex", "GA4"],
	},
	{
		title: "Delivery & Automation",
		description:
			"Modernize, deploy, and support production applications through CI/CD pipelines, source control, dependency management, scripting, workflow automation, and cross-functional delivery.",
		tools: [
			"Azure DevOps",
			"Azure Pipelines",
			"Vercel",
			"PowerShell",
			"Git",
			"CI/CD",
			"Application Modernization",
			"Dependency Modernization",
			"Adobe Illustrator Automation (JavaScript)",
		],
	},
];
