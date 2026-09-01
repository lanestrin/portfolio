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
			"Continuous employment through multiple acquisitions and ownership transitions. Promoted through increasingly technical roles, from product systems and workflow automation into frontend-focused application development and senior application ownership.",
		roles: [
			{
				role: "Senior Application Developer",
				company: "Unrivaled Teamwear",
				period: "Nov 2024 — Present",
				meta: "Enterprise Web Applications",
				summary: "",
				bullets: [
					"Redesigned Sales Order Entry error reporting and support triage after identifying that **60%+ of quote failures were product-data related**, reducing issue routing from weeks to hours; stabilized recurring quote and configuration defects, **dramatically reducing support volume and leaving only a small number of weekly edge-case tickets**.",
					"Owned frontend development of Sales Order Entry customization and saved-quote workflows using **React and TypeScript**, including pricing, form validation, persisted configurations, and quote rehydration; implemented **C#/.NET controller validation** to detect outdated or invalid product data.",
					"Modernized the frontend of a tightly coupled legacy .NET MVC cart and checkout workflow using **Vite and TypeScript**, improving load times from roughly **8 minutes to under 30 seconds** and adding validation and safeguards against duplicate submissions.",
					"Refactored duplicated product-customization logic and prop-drilled state into centralized React state management, reducing changes that previously touched **10+ pages/components** and eliminating unnecessary backend requests during Sales quoting workflows.",
					"Led implementation of an Adyen payment migration across **three legacy .NET and .NET MVC applications**, researching API request/response requirements and user-facing validation to support stronger payment security and retire the previous payment process.",
					"Built and launched a **Shopify storefront using Liquid** for an influencer drop-shipping partnership, enabling Sales-managed content and timed product availability; the limited-release campaign **sold out ahead of schedule**.",
				],
				stack: [],
			},
			{
				role: "Developer Applications III",
				company: "Hanesbrands Inc.",
				period: "Jun 2022 — Nov 2024",
				meta: "Application Development",
				summary: "",
				bullets: [
					"Owned UI/UX design and frontend development of the Sales Order Entry application, translating business requirements and approved wireframes into production **React** features while modernizing legacy workflows.",
					"Built an automated customer-proof workflow that eliminated a manual Sales-to-Art handoff where **50%+ of requests required clarification and could add 3–5 business days before production**, contributing to broader improvements in order turnaround time.",
					"Modernized legacy application dependencies by removing deprecated **Bower** packages, identifying secure replacements, and resolving cascading compatibility conflicts without disrupting existing functionality.",
					"Introduced **Playwright end-to-end testing** for critical application workflows and connected React applications to existing REST APIs, SQL-backed data, and C#/.NET MVC services.",
				],
				stack: [],
			},
			{
				role: "Research & Development Coordinator",
				company: "Champion Teamwear",
				period: "May 2016 — Jun 2022",
				meta: "Product + Process Innovation",
				summary: "",
				bullets: [
					"Planned and executed the migration of company image assets and web-to-print workflows from **Adobe Scene7 to the Pulse Graphics Engine** before Scene7's web-to-print functionality reached end of life.",
					"Developed JavaScript automation for Adobe Illustrator that reduced art-production processing time by approximately **75%**, accelerated delivery of production-ready artwork, and improved file consistency.",
					"Automated product-scaling, artwork-conversion, and content-management workflows, including creation of **thousands of templates**, helping Technical Application Designers prepare customizable products more efficiently.",
				],
				stack: [],
			},
			{
				role: "Lead Technical Application Designer",
				company: "GTM Sportswear / Champion Teamwear",
				period: "Mar 2014 — May 2016",
				meta: "Product + Production Systems",
				summary: "",
				bullets: [
					"Researched and developed the product-preparation workflow for publishing customizable sublimated products online, establishing repeatable processes for digital assets, templates, and web-to-print production.",
					"Created technical documentation and trained team members on web-based product preparation while partnering with development, marketing, and production teams on supporting systems and workflows.",
				],
				stack: [],
			},
		],
	},
];
