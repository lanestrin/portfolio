export interface TechnicalSkill {
	title: string;
	description: string;
	tools: string[];
}

export const technicalSkills: TechnicalSkill[] = [
	{
		title: "Frontend",
		description:
			"Build and modernize enterprise interfaces with React and TypeScript, focusing on maintainable component architecture, state management, responsive design, accessibility, and user-friendly business workflows.",
		tools: [
			"React",
			"TypeScript",
			"JavaScript",
			"Next.js",
			"Vite",
			"React Query",
			"React Context",
			"Redux",
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
			"Work across application boundaries using C#/.NET, SQL, and REST APIs, including controller validation, authentication flows, third-party integrations, and connections to existing backend services.",
		tools: [
			"C#",
			".NET",
			".NET MVC",
			"REST APIs",
			"SQL",
			"Node.js",
			"Express.js",
			"Authentication",
			"Third-Party API Integration",
		],
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
		title: "AI & LLM Integration",
		description:
			"Integrate AI and LLMs into applications to enhance workflows, automate tasks, and provide structured outputs with validation and human-in-the-loop processes.",
		tools: [
			"Generative AI",
			"LLM-Assisted Development",
			"Prompt Design",
			"Structured Outputs",
			"AI-Assisted Debugging",
			"Code Analysis",
			"Reasoning",
			"Validation",
			"Human-in-the-Loop Workflows",
		],
	},
	{
		title: "Delivery & Automation",
		description:
			"Support application delivery and modernization through CI/CD, Azure tooling, dependency management, scripting, deployment workflows, and production automation.",
		tools: [
			"Azure DevOps",
			"Azure Pipelines",
			"Azure Storage Explorer",
			"Git",
			"CI/CD",
			"Vercel",
			"PowerShell",
			"npm",
			"NuGet",
			"JavaScript Automation",
			"Adobe Illustrator Scripting",
		],
	},
];
