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
    title: "Senior Software Developer",
    summary:
        "Frontend-focused software developer building enterprise web applications with React, Next.js, TypeScript, C#/.NET, and REST APIs. I use my design background to turn complex workflows into clear, reliable, and maintainable user experiences.",
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
