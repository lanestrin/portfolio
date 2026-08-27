export interface Role {
	role: string;
	company: string;
	period: string;
	meta: string;
	summary: string;
	bullets: string[];
	stack: string[];
}

export interface Experience {
	organization: string[];
	description?: string;
	roles: Role[];
}

export const experience: Experience[] = [
	{
		organization: ["GTM Sportswear", "Champion Teamwear", "Hanesbrands", "Unrivaled Teamwear"],
		description:
			"Continuous employment through multiple acquisitions and ownership transitions. Promoted through increasingly technical roles, from product systems and workflow automation into full-stack application development and senior application ownership.",
		roles: [
			{
				role: "Senior Application Developer",
				company: "Unrivaled Teamwear",
				period: "Nov 2024 — Present",
				meta: "Enterprise Web Applications",
				summary:
					"Develop, maintain, and support five business applications, including three customer-facing websites and two internal tools. Lead full-stack modernization, architecture, integrations, testing, deployment, and production support using React, TypeScript, C#/.NET, SQL, REST APIs, and Azure DevOps.",
				bullets: [
					"Architecture & Payment Integration: Architected and engineered the end-to-end integration of a new Adyen payment processor across 5 core enterprise applications, securing customer-facing and internal transactional workflows.",
					"Legacy Modernization: Modernized legacy .NET MVC systems by refactoring them into decoupled React and TypeScript architectures with modern .NET backend services, utilizing Vite frontends and Azure DevOps for robust CI/CD validation.",
					"Checkout Optimization: Led the full-stack refactor of the checkout workflow, fixing critical race conditions to eliminate duplicate payment transactions and ensure transactional integrity between frontend state and backend order creation.",
					"System Scalability: Redesigned the product customization matrix and state hydration modal for the enterprise sales order system, reducing server overhead and dynamically persisting cross-functional configuration profiles.",
					"Performance Engineering: Optimised data-fetching strategies and asset loading for core imagery services, significantly dropping redundant server requests to maximize client-side responsiveness.",
				],
				stack: [
					"React.js",
					"TypeScript",
					"React Context",
					"C#",
					".NET",
					".NET MVC",
					"REST APIs",
					"SQL",
					"Vite",
					"Adyen",
					"Shopify API",
					"Azure DevOps",
				],
			},
			{
				role: "Developer Applications III",
				company: "Hanesbrands Inc.",
				period: "Jun 2022 — Nov 2024",
				meta: "Application Development",
				summary:
					"Developed and modernized applications supporting sales, payments, commerce, and internal business operations. Worked across React and TypeScript interfaces, C#/.NET MVC services, SQL, REST APIs, and third-party integrations while collaborating with sales teams, stakeholders, and product owners.",
				bullets: [
					"Full-Stack Feature Engineering: Pivoted into full-stack application development, engineering scalable features across frontend React interfaces and backend C# services for core enterprise web properties",
					"UI/UX & Frontend Ownership: Owned the end-to-end UI/UX design and frontend development of the mission-critical Sales Order Entry application, transforming complex business requirements and wireframes into highly responsive production features",
					"Codebase Optimization: Refactored major modules of the Sales Order Entry frontend to optimize code maintainability, simplify user workflows, and establish a modular design system for future updates",
					"Workflow Automation Engine: Engineered an automated customer-proof generation tool that automatically compiled artwork data and handled client-approval communications, completely removing manual dependencies on the Art Department",
				],
				stack: [
					"React.js",
					"TypeScript",
					"C#",
					".NET MVC",
					"REST APIs",
					"SQL",
					"UI/UX",
					"Playwright",
					"Jest",
					"Adyen",
					"Shopify API",
					"Dependency Modernization",
				],
			},
			{
				role: "Research & Development Coordinator",
				company: "Champion Teamwear",
				period: "May 2016 — Jun 2022",
				meta: "Product + Process Innovation",
				summary:
					"Supported production systems through JavaScript automation, PowerShell scripting, software maintenance, and platform migration. Developed tools that reduced manual work and improved artwork preparation, template creation, and web-to-print production while partnering with engineering, IT, and business teams to keep systems stable and current.",
				bullets: [
					"System & Asset Migration: Orchestrated the migration of enterprise image assets and web-to-print production pipelines from legacy Adobe Scene7 to the Pulse Graphics Engine before end-of-life",
					"Workflow Automation Scripting: Developed custom JavaScript automation scripts for Adobe Illustrator, accelerating art production delivery speeds by 75% while heavily reducing manual data processing errors",
					"Data & Render Optimization: Engineered parsing scripts to automatically identify and structure text, canvas styling, and colors for seamless entry into the core CMS, ensuring stable rendering across web customization experiences",
					"Technical Upskilling: Independently mastered TypeScript and SQL to support core software database needs, building utility scripts to improve data pipelines and internal infrastructure tools",
					"Server Scripting: Created robust PowerShell automation scripts to securely transfer large-scale asset profiles and file arrays during system migrations, eliminating manual overhead",
				],
				stack: [
					"Workflow Automation",
					"JavaScript",
					"Adobe Illustrator",
					"Adobe Scene7",
					"Pulse Graphics Engine",
					"TypeScript",
					"SQL",
					"PowerShell",
				],
			},
			{
				role: "Lead Technical Application Designer",
				company: "GTM Sportswear / Champion Teamwear",
				period: "Mar 2014 — May 2016",
				meta: "Product + Production Systems",
				summary:
					"Led technical design operations and a team responsible for web-based visual assets, product imagery, 3D preparation, web-to-print templates, and automated garment-scaling workflows. Partnered with design, marketing, product, and development teams to launch digital customization programs, support third-party integrations, and improve production delivery.",
				bullets: [
					"Web-to-Print Engineering: Formulated the product-preparation guidelines and configuration standards for publishing complex customizable apparel assets to web interfaces",
					"CMS Pipeline Collaboration: Partnered closely with backend engineering teams to design scalable URL parameter structures for dynamic asset configuration using Adobe Scene7",
					"Cross-Functional System Launches: Collaborated directly with web development and marketing teams to launch online product personalization initiatives, generating automated templates to optimize the web-to-print handoff",
				],
				stack: [
					"Web-to-Print",
					"Workflow Automation",
					"Adobe Scene7",
					"Content Management Systems",
					"Photoshop",
					"Illustrator",
					"JavaScript",
					"Team Leadership",
				],
			},
		],
	},
];
