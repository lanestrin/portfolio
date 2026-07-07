import type { Profile, Experience, Expertise, Education, Certification } from "../model/resumeModel";


const profile: Profile = {
    name: "Lan Nguyen",
    title: "Senior Application Developer",
    summary:
        "Frontend-focused software engineer building enterprise web applications with React, Next.js, TypeScript, and modern frontend systems. My design background helps me turn complex workflows into scalable, maintainable, and polished user experiences.",
    contact: {
        email: "ln.nguy3n@gmail.com",
        phone: "(913) 205-7926",
        phoneHref: "tel:+19132057926",
        location: "Olathe, Kansas",
        github: "https://github.com/lanestrin",
        linkedin: "https://linkedin.com/in/lanestrin",
    },
};

const experience: Experience[] = [
    {
        role: "Senior Application Developer",
        company: "Unrivaled Teamwear",
        period: "Nov 2024 — Present",
        meta: "Enterprise Web Applications",
        bullets: [
            "Supported the migration of the graphic engine and Pulse API to a new server, validating functionality across environments and helping ensure application continuity during infrastructure changes.",
            "Led a major checkout page refactor for Coach’s Assistant, resolving payment-processing issues where payment methods could process twice or fail to create orders after payment was taken.",
            "Converted legacy .NET MVC frontend workflows to React and TypeScript to improve UI/UX, stabilize checkout behavior, and make the application easier to maintain.",
            "Contributed to modernization planning for transitioning legacy .NET MVC architecture toward updated .NET backend services and a Vite-powered frontend.",
        ],
        stack: ["React", "TypeScript", ".NET MVC", "Pulse API", "Vite"],
    },
    {
        role: "Developer Applications III",
        company: "Hanesbrands Inc.",
        period: "Jun 2022 — Nov 2024",
        meta: "Application Development",
        bullets: [
            "Implemented Adyen payment processing improvements for commerce workflows, supporting more reliable payment handling across enterprise application releases.",
            "Integrated and supported payment, tax, and platform services across React applications, including Adyen, tax API implementations, Shopify API touchpoints, G4, and Cookies plugin work.",
            "Developed enterprise React applications connected to REST APIs and .NET MVC-backed systems supporting internal operations and customer-facing commerce workflows.",
            "Implemented BDD and automated testing practices with Playwright and Jest to protect critical user flows and improve release confidence.",
        ],
        stack: ["React", "REST APIs", ".NET MVC", "Adyen", "Playwright"],
    },
    {
        role: "Research & Development Coordinator",
        company: "Champion Teamwear",
        period: "May 2016 — Jun 2022",
        meta: "Product + Process Innovation",
        bullets: [
            "Led research and process improvement initiatives across product development, manufacturing workflows, and internal business operations.",
            "Evaluated emerging technologies and workflow opportunities to improve efficiency, documentation, and cross-department collaboration.",
            "Partnered with software developers and business stakeholders to improve internal tools, operational processes, and application workflows.",
        ],
        stack: [
            "Process Improvement",
            "Product Development",
            "Research",
        ],
    },
    {
        role: "UI / UX Designer",
        company: "Network Computer Solutions",
        period: "Jan 2014 — 2016",
        meta: "Interface Design",
        bullets: [
            "Designed responsive interfaces and user experiences for web applications with a focus on layout, clarity, usability, and visual hierarchy.",
            "Collaborated with developers to translate visual concepts, user flows, and interface decisions into production-ready experiences.",
        ],
        stack: ["UI Design", "UX Design", "Responsive Design"],
    },
];

const expertise: Expertise[] = [
    {
        title: "Frontend Engineering",
        description:
            "Build maintainable, responsive React and Next.js interfaces for complex enterprise workflows, focusing on component architecture, state management, and scalable UI patterns.",
        tools: [
            "React",
            "Next.js",
            "TypeScript",
            "React Query",
            "SCSS",
        ],
    },
    {
        title: "API & Platform Integration",
        description:
            "Connect frontend applications to commerce, payment, tax, Shopify, and .NET backend services.",
        tools: [
            ".NET",
            ".NET MVC",
            "REST APIs",
            "Adyen",
            "Tax APIs",
            "Shopify API",
        ],
    },
    {
        title: "Testing & Reliability",
        description:
            "Protect critical user flows with automated testing and BDD practices.",
        tools: [
            "Playwright",
            "Jest",
            "BDD",
            "Regression Testing",
        ],
    },
    {
        title: "Delivery Workflow",
        description:
            "Experience with Azure DevOps, Git, CI/CD pipelines, Agile planning, and production releases.",
        tools: [
            "Azure DevOps",
            "Git",
            "CI/CD",
            "Agile Delivery",
        ],
    },
    {
        title: "Design-Informed Development",
        description:
            "Translate UX intent into production-ready interfaces with strong judgment around hierarchy, accessibility, and usability.",
        tools: [
            "Figma",
            "UI Design",
            "UX Design",
            "Responsive Design",
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