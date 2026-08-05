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
            "SASS",
            "HTML",
            "JQuery",
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
            "Node.js",
            "Express.js",
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
            "Vertex",
            "Custom Adobe Illustrator Scripts",
        ],
    },
];