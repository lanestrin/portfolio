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
				summary: "",
				bullets: [
					"Led the Sales Order Entry expansion for the Cheer and Dance market, coordinating requirements across supply chain, backend development, and technical applications. Researched the product structure needed for web compatibility, defined the supporting data requirements, and trained the Technical Application team on the new product-building and data-entry processes.",
					"Refactored the Sales Order Entry application for greater scalability and rebuilt its product-customization modal to dynamically render available options, persist user selections, and rehydrate customization data when saved quotes were reopened.",
					"Led a React and TypeScript refactor of the Coach's Assistant checkout workflow, resolving defects that could create duplicate transactions or accept payment without successfully creating an order.",
					"Refactored product-imagery components to reduce unnecessary server requests and redundant image reloads, improving application performance and the user experience.",
					"Led the integration of a new Adyen payment process across all five business applications, coordinating implementation and validation across customer-facing and internal systems.",
					"Led the development and integration of a Shopify e-commerce experience for a web influencer initiative.",
					"Helped modernize legacy .NET MVC applications through React and TypeScript refactoring, modern .NET services, Vite-powered frontends, and Azure DevOps deployment validation.",
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
					"Independently learned React and C# to transition into application development and contribute across frontend interfaces and backend services.",
					"Owned the UI/UX design and frontend development of the Sales Order Entry application, translating business requirements and approved wireframes into production React features.",
					"Refactored significant portions of the Sales Order Entry interface and frontend code to improve usability, simplify workflows, and create a more maintainable foundation for new functionality.",
					"Developed an automated customer-proof feature that generated artwork files and sent them to customers for approval, removing the Sales team's dependency on the Art Department and eliminating an additional manual step from the artwork workflow.",
					"Led the modernization of legacy application dependencies by removing deprecated Bower packages, identifying secure replacements, and resolving cascading compatibility conflicts without disrupting existing functionality.",
					"Researched and integrated Playwright, establishing end-to-end testing for critical application workflows and increasing confidence in production releases.",
					"Connected React applications to REST APIs, SQL-backed data, and C#/.NET MVC services supporting customer-facing commerce and internal operations.",
					"Implemented Adyen payment improvements and integrated Shopify, tax, analytics, and consent-management services across enterprise applications.",
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
					"Planned and executed the migration of company image assets and web-to-print workflows from Adobe Scene7 to the Pulse Graphics Engine before Scene7's web-to-print functionality reached end of life.",
					"Developed JavaScript automation scripts for Adobe Illustrator that streamlined art-production tasks, reduced processing time by approximately 75%, accelerated the delivery of production-ready artwork, and improved file consistency.",
					"Created a JavaScript automation script for Adobe Illustrator that identified and organized text, colors, mascots, and mascot colors for consistent entry into the content management system and reliable rendering in the web customization experience.",
					"Built a JavaScript automation script for Adobe Illustrator that converted existing .ai artwork and recreated the files in the .pv format required by the Pulse Graphics Engine for web-based product rendering.",
					"Automated product-scaling workflows and the creation of thousands of templates, helping Technical Application Designers prepare customizable products more efficiently.",
					"Independently learned TypeScript and SQL to support the development team's data-management needs and contribute to internal tools and processes.",
					"Developed a PowerShell script for transferring large files and digital assets between servers, reducing the manual effort required for system and asset migrations.",
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
					"Researched and developed the product-preparation workflow for publishing customizable sublimated products on the web, establishing a consistent process for preparing digital assets and templates.",
					"Created step-by-step training guides and trained team members to prepare products for web-based customization.",
					"Collaborated with developers on the backend content management system and helped define URL parameter structures compatible with Adobe Scene7.",
					"Designed the product-scaling workflow used in production, streamlining the web-to-print handoff and improving turnaround times.",
					"Partnered with marketing and web development teams to launch digital customization programs and improve supporting workflows and documentation.",
				],
				stack: [],
			},
		],
	},
];
