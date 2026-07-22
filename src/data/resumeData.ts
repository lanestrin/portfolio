import type {
    Profile,
    Experience,
    Expertise,
    Education,
    Certification,
} from "../model/resumeModel";

const profile: Profile = {
    name: "Lan Nguyen",
    title: "Senior Frontend Engineer",
    summary:
        "Frontend-focused software engineer building enterprise web applications with React, Next.js, TypeScript, and modern frontend systems. My design background helps me turn complex workflows into scalable, maintainable, and polished user experiences.",
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

export const experience: Experience[] = [
    {
        organization: [
            "GTM Sportswear",
            "Champion Teamwear",
            "Hanesbrands",
            "Unrivaled Teamwear",
        ],
        period: "",
        description:
            "Continuous employment through multiple acquisitions and ownership transitions. Promoted through increasingly technical roles, from product systems and workflow automation into frontend application development and senior engineering responsibilities.",
        roles: [
            {
                role: "Senior Application Developer",
                company: "Unrivaled Teamwear",
                period: "Nov 2024 — Present",
                meta: "Enterprise Web Applications",
                bullets: [
                    "Promoted to Senior Application Developer, taking broader ownership of frontend architecture, application stability, and modernization across enterprise sales, checkout, graphics, and order-processing systems.",
                    "Led a React and TypeScript refactor of the Coach's Assistant checkout workflow, resolving defects that could create duplicate transactions or accept payment without successfully creating an order.",
                    "Modernized legacy .NET MVC workflows by rebuilding frontend functionality in React and TypeScript while supporting C# and .NET backend services.",
                    "Re-architected significant portions of the Sales Order Entry application with React Context and improved state-management patterns, reducing fragmented component state and creating a more maintainable foundation.",
                    "Contributed to the transition from legacy .NET MVC applications toward modern .NET services and Vite-powered React frontends, including deployment and environment validation through Azure DevOps.",
                ],
                stack: [
                    "React",
                    "TypeScript",
                    "React Context",
                    "C#",
                    ".NET",
                    ".NET MVC",
                    "Vite",
                    "Azure DevOps",
                ],
            },
            {
                role: "Developer Applications III",
                company: "Hanesbrands Inc.",
                period: "Jun 2022 — Nov 2024",
                meta: "Application Development",
                bullets: [
                    "Promoted from Research & Development Coordinator into a dedicated application development role, building production React applications for commerce, payments, sales operations, and internal workflows.",
                    "Owned the frontend design and development of the Sales Order Entry application, translating business requirements and approved wireframes into production React interfaces.",
                    "Built React applications connected to REST APIs and C#/.NET MVC services, supporting customer-facing commerce and internal business operations.",
                    "Implemented Adyen payment improvements and integrated Shopify, tax, analytics, and consent-management services across enterprise applications.",
                    "Introduced and expanded automated testing with Playwright and Jest, protecting critical user workflows and increasing release confidence.",
                ],
                stack: [
                    "React",
                    "TypeScript",
                    "C#",
                    ".NET MVC",
                    "REST APIs",
                    "Adyen",
                    "Shopify API",
                    "Playwright",
                    "Jest",
                ],
            },
            {
                role: "Research & Development Coordinator",
                company: "Champion Teamwear",
                period: "May 2016 — Jun 2022",
                meta: "Product + Process Innovation",
                bullets: [
                    "Planned and executed the migration of company image assets and web-to-print workflows from Adobe Scene7 to the Pulse Graphics Engine before the platform's web-to-print functionality reached end of life.",
                    "Developed Adobe Illustrator automation that cleaned artwork, consolidated color layers, prepared production files, and reduced manual production work from lengthy processes to minutes.",
                    "Automated product-scaling workflows and the creation of thousands of templates while partnering with engineering, IT, and business teams to improve internal systems and operational processes.",
                ],
                stack: [
                    "Workflow Automation",
                    "Adobe Illustrator",
                    "Adobe Scene7",
                    "Pulse Graphics Engine",
                    "PowerShell",
                ],
            },
            {
                role: "Lead Technical Application Designer",
                company: "GTM Sportswear / Champion Teamwear",
                period: "Mar 2014 — May 2016",
                meta: "Product + Production Systems",
                bullets: [
                    "Led a team of 8–13 members supporting customizable web-to-print artwork, template development, 3D product preparation, and automated garment-scaling workflows.",
                    "Partnered with marketing and web development teams to launch digital customization programs and improve production workflows, documentation, and turnaround time.",
                ],
                stack: [
                    "Web-to-Print",
                    "Workflow Automation",
                    "Photoshop",
                    "Illustrator",
                    "Team Leadership",
                ],
            },
        ],
    },
    {
        organization: ["Network Computer Solutions"],
        period: "",
        roles: [
            {
                role: "UI / UX Designer",
                company: "Network Computer Solutions",
                period: "Jan 2014 — Jan 2016",
                meta: "Interface Design",
                bullets: [
                    "Designed and maintained the company's responsive website, including layout, navigation, visual hierarchy, and overall user experience.",
                    "Created UI/UX concepts for software applications and collaborated with developers and business stakeholders to translate interface requirements into production-ready experiences.",
                ],
                stack: [
                    "UI Design",
                    "UX Design",
                    "Responsive Design",
                    "Web Design",
                ],
            },
        ],
    },
];

const expertise: Expertise[] = [
    {
        title: "Languages",
        description:
            "Build production web applications with strongly typed frontend and backend code, semantic markup, and maintainable styling systems.",
        tools: [
            "TypeScript",
            "JavaScript",
            "C#",
            "HTML",
            "CSS",
            "SCSS",
        ],
    },
    {
        title: "Frontend",
        description:
            "Design and ship maintainable interfaces for complex commerce and enterprise workflows with reusable architecture, predictable state, responsive behavior, and accessible UI patterns.",
        tools: [
            "React",
            "Next.js",
            "React Query",
            "React Context",
            "Vite",
            "Responsive Design",
            "Accessibility",
        ],
    },
    {
        title: "Backend & APIs",
        description:
            "Support frontend applications with C# and .NET services, REST integrations, and Convex-backed data and authentication workflows.",
        tools: [
            "C#",
            ".NET",
            ".NET MVC",
            "REST APIs",
            "Convex",
        ],
    },
    {
        title: "Testing",
        description:
            "Use unit, integration, and browser automation to protect critical user workflows and reduce regression risk across fast-moving applications.",
        tools: [
            "Playwright",
            "Jest",
            "Cypress",
            "Selenium",
            "Unit Testing",
            "Integration Testing",
        ],
    },
    {
        title: "Commerce & Integrations",
        description:
            "Implement payment, commerce, tax, and analytics integrations that translate complex business rules into dependable customer and internal workflows.",
        tools: [
            "Adyen",
            "Shopify API",
            "Tax APIs",
            "GA4",
        ],
    },
    {
        title: "Delivery & Automation",
        description:
            "Ship and support production applications through cloud deployment, CI/CD pipelines, source control, scripting, and cross-functional delivery practices.",
        tools: [
            "Azure DevOps",
            "Azure Pipelines",
            "Vercel",
            "PowerShell",
            "Git",
            "CI/CD",
            "Agile",
        ],
    },
];

const education: Education[] = [
    {
        school: "Kansas State University",
        degree: "Bachelor of Fine Arts",
        period: "2004 — 2009",
        focus: "Visual Communication / Graphic Design",
        description:
            "Formal design foundation in visual communication, typography, layout, brand systems, and user-centered presentation.",
    },
    {
        school: "Kansas City Kansas Community College",
        degree: "Associate of Applied Science",
        period: "2002 — 2004",
        focus: "Computer Aided Drafting",
        description:
            "Technical drafting background that strengthened precision, systems thinking, documentation, and detail-oriented production work.",
    },
];

const certifications: Certification[] = [
    {
        title: "Software Architecture & Technology of Large-Scale Systems",
        provider: "Udemy",
        category: "Architecture",
    },
    {
        title: "Software Architecture Security",
        provider: "Udemy",
        category: "Security",
    },
    {
        title: "Advanced React",
        provider: "Udemy",
        category: "Frontend",
    },
    {
        title: "Next.js",
        provider: "Udemy",
        category: "Frontend",
    },
];

export const resumeData = {
    profile,
    experience,
    expertise,
    education,
    certifications,
};