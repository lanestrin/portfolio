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
			"Continuous employment through multiple acquisitions and ownership transitions. Promoted through increasingly technical roles, from product systems and workflow automation into application development and broader technical ownership.",
		roles: [
			{
				role: "Senior Application Developer",
				company: "Unrivaled Teamwear",
				period: "Nov 2024 — Sep 2026",
				meta: "Enterprise Web Applications",
				summary:
					"Lead development, technical discovery, and modernization across enterprise sales, product-configuration, checkout, payment, authentication, and order-processing applications, working across React/TypeScript frontends, C#/.NET services, third-party APIs, and cross-functional business teams.",
				bullets: [
					"Diagnosed recurring Sales Order Entry quote failures and traced the majority to outdated or invalid product configuration data in the CMS; added C#/.NET controller validation to detect those conditions and redesigned error reporting so support teams could identify and route data issues directly instead of treating them as application defects.",
					"Led the Sales Order Entry expansion for the Cheer and Dance market, coordinating requirements across Sales, Supply Chain, backend development, and Technical Applications; researched web-compatible product structure, defined supporting data requirements, and trained the Technical Application team on new product-building and data-entry processes.",
					"Refactored the Sales Order Entry application and rebuilt its product-customization modal in React and TypeScript to dynamically render available options, persist user selections, and rehydrate customization data when saved quotes were reopened.",
					"Evaluated and implemented Vite as frontend build tooling within legacy .NET MVC applications, integrating React/TypeScript assets with MVC views, routing, environment configuration, authentication/session behavior, asset paths, and Azure DevOps deployment while preserving existing server-side behavior.",
					"Redesigned the cart and checkout UI/UX during the Vite/.NET MVC modernization, rebuilding the workflows to be responsive and mobile-friendly and updating the user login experience while maintaining compatibility with existing backend services.",
					"Led a React and TypeScript refactor of the Coach's Assistant checkout workflow, resolving defects that could create duplicate transactions or accept payment without successfully creating an order.",
					"Led technical discovery and implementation of a new Adyen payment process across five web applications, researching API request/response requirements and defining how legacy .NET/.NET MVC systems would communicate with Adyen, validate payment state, and support user-facing checkout behavior; coordinated with Finance, Sales, and technical teams.",
					"Led technical discovery for integrating the Momentec API with Sales Order Entry, researching endpoints and data requirements and defining the frontend integration approach for incorporating the service into the existing application.",
					"Modernized frontend and .NET dependencies across legacy applications, updating npm and NuGet packages, evaluating backward-compatibility requirements, and resolving dependency conflicts without disrupting existing production behavior.",
				],
				stack: [],
			},
			{
				role: "Developer Applications III",
				company: "Hanesbrands Inc.",
				period: "Jun 2022 — Nov 2024",
				meta: "Application Development",
				summary:
					"Promoted from Research & Development into dedicated application development after independently learning React and C#, building and modernizing enterprise React applications connected to C#/.NET MVC services, REST APIs, SQL-backed data, and production automation and migration tooling.",
				bullets: [
					"Owned the UI/UX design and frontend development of the Sales Order Entry application, translating business requirements and approved wireframes into production React features.",
					"Refactored significant portions of the Sales Order Entry interface and frontend code to improve usability, simplify workflows, and create a more maintainable foundation for new functionality.",
					"Developed an automated customer-proof feature that generated artwork files and sent them to customers for approval, removing the Sales team's dependency on the Art Department and eliminating an additional manual step from the artwork workflow.",
					"Developed JavaScript automation using Adobe Illustrator's scripting API to convert thousands of legacy Adobe Scene7 art templates for Pulse Graphics Engine compatibility, programmatically rearranging, sorting, and colorizing design elements before saving the converted artwork.",
					"Built a companion PowerShell script to automate file handling for the conversion workflow, saving converted templates into organized output folders and supporting batch processing of thousands of production assets.",
					"Led modernization of legacy frontend dependencies by removing deprecated Bower packages, identifying secure replacements, and resolving cascading compatibility conflicts without disrupting existing functionality.",
					"Researched and introduced Playwright end-to-end testing for critical application workflows, establishing automated coverage for production-facing scenarios and improving confidence in releases.",
					"Connected React applications to REST APIs, SQL-backed data, and C#/.NET MVC services supporting customer-facing commerce and internal operations; implemented Adyen payment improvements and integrated tax, analytics, and consent-management services.",
				],
				stack: [],
			},
			{
				role: "Research & Development Coordinator",
				company: "Champion Teamwear",
				period: "May 2016 — Jun 2022",
				meta: "Product + Process Innovation",
				summary:
					"Developed automation, migration tooling, and data workflows for web-to-print production, using JavaScript, TypeScript, SQL, PowerShell, Adobe Illustrator, and graphics systems to replace manual processes and support web-based product customization.",
				bullets: [
					"Planned and executed the migration of company image assets and web-to-print workflows from Adobe Scene7 to the Pulse Graphics Engine before Scene7's web-to-print functionality reached end of life.",
					"Developed JavaScript automation for Adobe Illustrator that standardized artwork-preparation workflows, significantly reduced manual processing time, improved file consistency, and prevented production errors caused by inconsistent manual preparation.",
					"Created JavaScript automation that identified and organized text, colors, mascots, and mascot colors for consistent entry into the content management system and reliable rendering in the web customization experience.",
					"Automated product-scaling workflows and the creation of thousands of templates, helping Technical Application Designers prepare customizable products more efficiently.",
					"Independently learned TypeScript and SQL to support the development team's data-management needs and contribute to internal tools and processes.",
					"Developed a PowerShell script for transferring large files and digital assets between servers, reducing manual effort during system and asset migrations.",
				],
				stack: [],
			},
			{
				role: "Lead Technical Application Designer",
				company: "GTM Sportswear / Champion Teamwear",
				period: "Mar 2014 — May 2016",
				meta: "Product + Production Systems",
				summary:
					"Led a team of 8-13 members supporting customizable web-to-print artwork, template development, 3D product preparation, and automated garment-scaling workflows while partnering with development, marketing, and production teams.",
				bullets: [
					"Researched and developed the product-preparation workflow for publishing customizable sublimated products on the web, establishing a consistent process for preparing digital assets and templates.",
					"Created step-by-step training guides and trained team members to prepare products for web-based customization.",
					"Collaborated with developers on the backend content management system and helped define URL parameter structures compatible with Adobe Scene7.",
					"Designed the product-scaling workflow used in production and partnered with marketing and web development teams to launch digital customization programs and improve supporting workflows.",
				],
				stack: [],
			},
		],
	},
];
