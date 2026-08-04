export interface Profile {
    name: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        phone: string;
        phoneHref: string;
        location: string;
        portfolio?: string;
        github: string;
        linkedin: string;
    };
}

export const profile: Profile = {
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
