import {
    FaArrowUpRightFromSquare,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa6";

import styles from "./Footer.module.scss";

const footerLinks = [
    {
        label: "Email",
        href: "mailto:ln.nguy3n@gmail.com",
        icon: FaEnvelope,
    },
    {
        label: "GitHub",
        href: "https://github.com/lanestrin",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/lanestrin",
        icon: FaLinkedinIn,
    },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.masthead}>
                    <span>Portfolio / Resume</span>
                    <span>Lan Nguyen</span>
                    <span>{new Date().getFullYear()}</span>
                </div>

                <div className={styles.content}>
                    <div className={styles.statementBlock}>
                        <span className={styles.kicker}>Final Note</span>

                        <p className={styles.statement}>
                            <span>Designed by background.</span>
                            <span>Driven by code.</span>
                        </p>
                    </div>

                    <aside className={styles.contactPanel} aria-label="Contact details">
                        <span className={styles.panelLabel}>Available For</span>

                        <p>
                            Frontend application development, enterprise UI
                            engineering, and product-focused engineering roles.
                        </p>

                        <a
                            href="mailto:ln.nguy3n@gmail.com"
                            className={styles.emailLink}
                        >
                            <span>Start a conversation</span>
                            <FaArrowUpRightFromSquare aria-hidden="true" />
                        </a>
                    </aside>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Lan Nguyen
                    </p>

                    <nav className={styles.links} aria-label="Footer links">
                        {footerLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                <Icon aria-hidden="true" />
                                <span>{label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;