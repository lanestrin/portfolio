import {
    FaArrowUpRightFromSquare,
    FaDownload,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaLocationDot,
    FaPhone,
} from "react-icons/fa6";
import {
    SiNextdotjs,
    SiReact,
    SiSass,
    SiTypescript,
} from "react-icons/si";

import styles from "./Hero.module.scss";

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/lanestrin",
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        href: "https://github.com/lanestrin",
        icon: FaGithub,
    },
    {
        label: "Email",
        href: "mailto:ln.nguy3n@gmail.com",
        icon: FaEnvelope,
    },
];

const contactItems = [
    {
        label: "Email",
        value: "ln.nguy3n@gmail.com",
        href: "mailto:ln.nguy3n@gmail.com",
        icon: FaEnvelope,
    },
    {
        label: "Phone",
        value: "(913) 205-7926",
        href: "tel:9132057926",
        icon: FaPhone,
    },
    {
        label: "Location",
        value: "Olathe, Kansas",
        icon: FaLocationDot,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/lanestrin",
        href: "https://linkedin.com/in/lanestrin",
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        value: "github.com/lanestrin",
        href: "https://github.com/lanestrin",
        icon: FaGithub,
    },
];

const techItems = [
    { label: "React", icon: SiReact },
    { label: "Next.js", icon: SiNextdotjs },
    { label: "TypeScript", icon: SiTypescript },
    { label: "SCSS", icon: SiSass },
];

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <aside className={styles.socialRail} aria-label="Social links">
                        <span className={styles.railLabel}>Connect</span>

                        <div className={styles.railLinks}>
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={styles.railLink}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={label}
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </aside>

                    <div className={styles.left}>
                        <p className={styles.eyebrow}>Portfolio / Resume</p>

                        <h1 className={styles.name}>LAN NGUYEN</h1>

                        <p className={styles.title}>
                            Senior Application Developer
                        </p>

                        <p className={styles.summary}>
                            Software engineer with 4+ years of professional
                            experience building enterprise web applications
                            using React, Next.js, and modern frontend
                            technologies. My background in design and product
                            development allows me to bridge the gap between
                            user experience and engineering to create scalable,
                            maintainable software.
                        </p>

                        <div className={styles.actions}>
                            <a
                                href="/resume.pdf"
                                download
                                className={styles.primaryButton}
                            >
                                <FaDownload aria-hidden="true" />
                                <span>Download Resume</span>
                            </a>

                            <a
                                href="#teamstore"
                                className={styles.secondaryButton}
                            >
                                <span>View TeamStore</span>
                                <FaArrowUpRightFromSquare aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <aside className={styles.meta} aria-label="Professional details">
                        <div className={styles.metaSection}>
                            <span className={styles.sectionLabel}>Contact</span>

                            <address className={styles.contactList}>
                                {contactItems.map(({ label, value, href, icon: Icon }) => (
                                    <div key={label} className={styles.contactItem}>
                                        <span className={styles.itemIcon} aria-hidden="true">
                                            <Icon />
                                        </span>

                                        <div className={styles.itemContent}>
                                            <span className={styles.itemLabel}>{label}</span>

                                            {href ? (
                                                <a
                                                    href={href}
                                                    target={href.startsWith("http") ? "_blank" : undefined}
                                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    className={styles.itemValue}
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <span className={styles.itemValue}>{value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </address>
                        </div>

                        <div className={styles.metaSection}>
                            <span className={styles.sectionLabel}>Core Stack</span>

                            <ul className={styles.stackList}>
                                {techItems.map(({ label, icon: Icon }) => (
                                    <li key={label} className={styles.stackItem}>
                                        <Icon aria-hidden="true" />
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Hero;