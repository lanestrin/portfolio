export interface TechnicalSkill {
	title: string;
	description: string;
	tools: string[];
}

export const technicalSkills: TechnicalSkill[] = [
	{
		title: "Frontend",
		description:
			"Build and modernize enterprise interfaces with React and TypeScript, focusing on maintainable component architecture, predictable state management, responsive design, accessibility, and user-friendly workflows.",
		tools: [
			"React",
			"TypeScript",
			"JavaScript",
			"Next.js",
			"Vite",
			"React Query",
			"React Context",
			"HTML",
			"CSS",
			"SCSS",
			"UI/UX",
			"Responsive Design",
			"Accessibility",
		],
	},
	{
		title: "Backend, Data & APIs",
		description:
			"Contribute to application workflows using C#/.NET, SQL, and REST APIs, including controller validation and integration with existing backend services.",
		tools: ["C#", ".NET", ".NET MVC", "REST APIs", "SQL", "Node.js", "Express.js"],
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
			"Implement and support payment, commerce, tax, and analytics integrations across customer-facing and internal applications.",
		tools: ["Adyen", "Shopify", "Liquid", "Vertex", "Tax APIs", "GA4"],
	},
	{
		title: "Delivery & Automation",
		description:
			"Support application delivery and modernization through CI/CD, source control, deployment tooling, scripting, and workflow automation.",
		tools: ["Azure DevOps", "Azure Pipelines", "Git", "CI/CD", "Vercel", "PowerShell"],
	},
];
