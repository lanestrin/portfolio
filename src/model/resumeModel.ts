export interface Profile {
    name: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        phone: string;
        phoneHref: string;
        location: string;
        github: string;
        linkedin: string;
    };
}

export interface Role {
    role: string;
    company: string;
    period: string;
    meta: string;
    bullets: string[];
    stack: string[];
}

export interface Experience {
    organization: string[];
    period: string;
    description?: string;
    roles: Role[];
}
export interface Expertise {
    title: string;
    description: string;
    tools: string[];
}

export interface Education {
    school: string;
    degree: string;
    period: string;
    focus: string;
    description: string;
}

export interface Certification {
    title: string;
    provider: string;
    category: string;
}