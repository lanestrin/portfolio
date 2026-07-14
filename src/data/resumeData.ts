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

const experience: Experience[] = [
    {
        organization: [
            "GTM Sportswear",
            "Champion Teamwear",
            "Hanesbrands",
            "Unrivaled Teamwear",
        ],
        period: "",
        description:
            "Advanced from technical product and production systems into enterprise software engineering through internal promotion while supporting the organization across multiple ownership transitions.",
        roles: [
            {
                role: "Senior Application Developer",
                company: "Unrivaled Teamwear",
                period: "Nov 2024 — Present",
                meta: "Enterprise Web Applications",
                bullets: [
                    "Led critical modernization and stability initiatives across enterprise sales, checkout, graphics, and order-processing applications built with React, TypeScript, .NET MVC, and backend APIs.",
                    "Developed and maintained Azure DevOps pipelines supporting the migration of the graphic engine and Pulse API to new server infrastructure, including environment configuration, deployment validation, and post-migration testing.",
                    "Led a major refactor of the Coach's Assistant checkout workflow, resolving payment defects that caused duplicate transactions or accepted payments without successfully creating corresponding orders.",
                    "Modernized legacy .NET MVC workflows by rebuilding frontend functionality in React and TypeScript, improving user experience, application reliability, and long-term maintainability.",
                    "Re-architected significant portions of the Sales Order Entry application using React Context and improved state-management patterns, reducing fragmented component state and creating a more scalable foundation for future development.",
                    "Contributed to the architectural strategy for transitioning legacy .NET MVC applications toward modern .NET backend services and Vite-powered React frontends.",
                    "Mentored senior engineering peers on scalable application architecture, separation of concerns, and effective frontend state-management practices, strengthening technical decision-making across the team.",
                ],
                stack: [
                    "React",
                    "TypeScript",
                    "React Context",
                    ".NET MVC",
                    ".NET",
                    "Azure DevOps",
                    "Azure Pipelines",
                    "Pulse API",
                    "Shopify API",
                    "Adyen",
                    "Playwright",
                    "Vite",
                    "C#"
                ],
            },
            {
                role: "Developer Applications III",
                company: "Hanesbrands Inc.",
                period: "Jun 2022 — Nov 2024",
                meta: "Application Development",
                bullets: [
                    "Promoted into a dedicated software engineering role, building and maintaining enterprise React applications supporting commerce, payments, sales operations, and internal business workflows.",
                    "Owned the end-to-end design and development of the Sales Order Entry application, creating wireframes and UI mockups for stakeholder approval before implementing approved workflows in React.",
                    "Served as the primary UI/UX contributor for the Sales Order Entry tool, translating business requirements into practical interfaces without support from a dedicated design team.",
                    "Implemented Adyen payment-processing improvements across commerce workflows, strengthening payment reliability and supporting safer enterprise application releases.",
                    "Integrated payment, tax, commerce, analytics, and consent-management services across React applications, including Adyen, Shopify APIs, tax APIs, G4, and cookie-management plugins.",
                    "Introduced and expanded BDD and automated testing practices using Playwright and Jest, protecting critical user flows and increasing confidence in application releases.",
                    "Trained and supported two senior developers on the infrastructure, architecture, dependencies, and operational workflows of the enterprise applications the team maintained.",
                    "Collaborated with business stakeholders and engineering teams throughout requirements gathering, design approval, development, testing, and production delivery.",
                ],
                stack: [
                    "React",
                    "Typescript",
                    "REST APIs",
                    "Adyen",
                    "Playwright",
                    "Jest",
                    "Unit Testing",
                    "Integration Testing",
                    "UI/UX Design",
                ],
            },
            {
                role: "Research & Development Coordinator",
                company: "Champion Teamwear",
                period: "May 2016 — Jun 2022",
                meta: "Product + Process Innovation",
                bullets: [
                    "Planned and executed the migration of company image assets and web-to-print workflows from Adobe Scene7 to the Pulse Graphics Engine before Scene7's web-to-print functionality reached end of life.",
                    "Developed Adobe Illustrator automation scripts that cleaned layer structures, consolidated color layers, and prepared artwork for production in minutes.",
                    "Automated product-scaling workflows and the creation of thousands of templates required to support production and the transition to a new imaging platform.",
                    "Managed the department's production-software budget, upgrades, and licensing needs, coordinating with vendors to procure licenses and with IT to deploy and maintain the software.",
                    "Partnered with art, technical application, engineering, IT, and business teams to identify workflow bottlenecks and implement scalable production tools and process improvements.",
                ],
                stack: [
                    "Adobe Scene7",
                    "Photoshop",
                    "Illustrator",  
                    "Pulse Graphics Engine",
                    "PowerShell",
                    "Illustrator Automation",
                    "Workflow Automation",
                    "Software Licensing",
                    "Vendor Management",
                ],
            },
            {
                role: "Lead Technical Application Designer",
                company: "GTM Sportswear / Champion Teamwear",
                period: "Mar 2014 — May 2016",
                meta: "Product + Production Systems",
                bullets: [
                    "Led a team of 8–13 members supporting 3D product preparation, customizable web-to-print artwork, template development, and automated sublimated garment scaling for production.",
                    "Planned team workloads, assigned priorities, and coordinated production deadlines across multiple sections of work.",
                    "Trained team members and developed section leads to manage specialized workflows, maintain quality standards, and support day-to-day production needs.",
                    "Created training documentation, process guides, and updated time-study references to improve onboarding, workflow consistency, and operational planning.",
                    "Partnered with marketing and web development teams to plan and launch new programs that expanded digital product and customization capabilities.",
                    "Restructured the Art Approval process to improve production consistency and reduce turnaround time.",
                ],
                stack: [
                    "Adobe Scene7",
                    "Photoshop",
                    "Illustrator",                
                ],
            },
        ],
    },
    {
        organization: ["Network Computer Solutions"],
        period: "",
        roles: [
            {
                role: "UI/UX & Brand Designer",
                company: "Network Computer Solutions",
                period: "Jan 2014 — Jan 2016",
                meta: "Brand + Interface Design",
                bullets: [
                    "Led the company rebrand by creating a new visual identity across logos, banners, business cards, marketing materials, and digital assets.",
                    "Designed and maintained the company website, including its responsive layout, visual hierarchy, navigation, and overall user experience.",
                    "Created UI and UX designs for new and evolving software applications introduced by the company over time.",
                    "Collaborated with developers and business stakeholders to translate branding requirements, user flows, and interface concepts into production-ready experiences.",
                ],
                stack: [
                    "Brand Identity",
                    "UI Design",
                    "UX Design",
                    "Web Design",
                    "Responsive Design",
                    "Print Design",
                ],
            },
        ],
    },
];

const expertise: Expertise[] = [
    {
        title: "Frontend Engineering",
        description:
            "Design and ship maintainable React and Next.js interfaces for complex commerce and enterprise workflows, with clear component architecture, predictable state management, responsive behavior, and accessible UI patterns.",
        tools: [
            "React",
            "Next.js",
            "TypeScript",
            "React Query",
            "SCSS",
        ],
    },
    {
        title: "Commerce & API Integration",
        description:
            "Integrate frontend applications with payment, tax, Shopify, and .NET services, translating complex business rules into dependable customer and internal workflows.",
        tools: [
            "REST APIs",
            "Adyen",
            "Shopify API",
            "Tax APIs",
            ".NET",
            ".NET MVC",
        ],
    },
    {
        title: "Frontend Testing Strategy",
        description:
            "Use focused unit and integration tests for fast-moving frontend code, with targeted browser automation in Cypress, Playwright, and Selenium to protect critical workflows and reduce regression risk.",
        tools: [
            "Jest",
            "Cypress",
            "Playwright",
            "Selenium",
            "Unit Testing",
            "Integration Testing",
        ],
    },
    {
        title: "Production Delivery",
        description:
            "Ship production releases through Azure DevOps, Git, and CI/CD, collaborating across product, design, QA, and engineering from planning through deployment.",
        tools: [
            "Azure DevOps",
            "Git",
            "CI/CD",
            "Agile Delivery",
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