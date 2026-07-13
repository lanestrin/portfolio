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
import { resumeData } from "../../data/resumeData";

const socialLinks = [
    {
        label: "LinkedIn",
        href: resumeData.profile.contact.linkedin,
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        href: resumeData.profile.contact.github,
        icon: FaGithub,
    },
    {
        label: "Email",
        href: `mailto:${resumeData.profile.contact.email}`,
        icon: FaEnvelope,
    },
];

const contactItems = [
    {
        label: "Email",
        value: resumeData.profile.contact.email,
        href: `mailto:${resumeData.profile.contact.email}`,
        icon: FaEnvelope,
    },
    {
        label: "Phone",
        value: resumeData.profile.contact.phone,
        href: resumeData.profile.contact.phoneHref,
        icon: FaPhone,
    },
    {
        label: "Location",
        value: resumeData.profile.contact.location,
        icon: FaLocationDot,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/lanestrin",
        href: resumeData.profile.contact.linkedin,
        icon: FaLinkedinIn,
    },
    {
        label: "GitHub",
        value: "github.com/lanestrin",
        href: resumeData.profile.contact.github,
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
                    <aside
                        className={styles.socialRail}
                        aria-label="Social links"
                    >
                        <span className={styles.railLabel}>Connect</span>

                        <div className={styles.railLinks}>
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={styles.railLink}
                                    target={
                                        href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={label}
                                >
                                    <Icon aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </aside>

                    <div className={styles.left}>
                        <p className={styles.eyebrow}>Portfolio / Resume</p>

                        <h1 className={styles.name}>
                            {resumeData.profile.name.toUpperCase()}
                        </h1>

                        <p className={styles.title}>
                            {resumeData.profile.title}
                        </p>

                        <p className={styles.summary}>
                            {resumeData.profile.summary}
                        </p>

                        <div className={styles.actions}>
                            <a
                                href="/resume?print=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryButton}
                            >
                                <FaDownload aria-hidden="true" />
                                <span>Download Resume</span>
                            </a>

                            <a
                                href="/case-study"
                                className={styles.secondaryButton}
                            >
                                <span>View Case Study</span>
                                <FaArrowUpRightFromSquare aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <aside
                        className={styles.meta}
                        aria-label="Professional details"
                    >
                        <div className={styles.metaSection}>
                            <span className={styles.sectionLabel}>
                                Contact
                            </span>

                            <address className={styles.contactList}>
                                {contactItems.map(
                                    ({
                                        label,
                                        value,
                                        href,
                                        icon: Icon,
                                    }) => (
                                        <div
                                            key={label}
                                            className={styles.contactItem}
                                        >
                                            <span
                                                className={styles.itemIcon}
                                                aria-hidden="true"
                                            >
                                                <Icon />
                                            </span>

                                            <div
                                                className={
                                                    styles.itemContent
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles.itemLabel
                                                    }
                                                >
                                                    {label}
                                                </span>

                                                {href ? (
                                                    <a
                                                        href={href}
                                                        target={
                                                            href.startsWith(
                                                                "http"
                                                            )
                                                                ? "_blank"
                                                                : undefined
                                                        }
                                                        rel={
                                                            href.startsWith(
                                                                "http"
                                                            )
                                                                ? "noopener noreferrer"
                                                                : undefined
                                                        }
                                                        className={
                                                            styles.itemValue
                                                        }
                                                    >
                                                        {value}
                                                    </a>
                                                ) : (
                                                    <span
                                                        className={
                                                            styles.itemValue
                                                        }
                                                    >
                                                        {value}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </address>
                        </div>

                        <div className={styles.metaSection}>
                            <span className={styles.sectionLabel}>
                                Core Stack
                            </span>

                            <ul className={styles.stackList}>
                                {techItems.map(
                                    ({ label, icon: Icon }) => (
                                        <li
                                            key={label}
                                            className={styles.stackItem}
                                        >
                                            <Icon aria-hidden="true" />
                                            <span>{label}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Hero;