import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { FaArrowUpRightFromSquare, FaDownload } from "react-icons/fa6";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <a
                        href="/"
                        className={styles.brand}
                        aria-label="Lan Nguyen Home"
                    >
                        <img
                            src={logo}
                            alt="Lan Nguyen"
                            className={styles.logo}
                        />
                    </a>

                    <nav className={styles.actions} aria-label="Primary actions">
                        <a
                            href="/resume.pdf"
                            download
                            className={styles.iconButton}
                            aria-label="Download Resume"
                        >
                            <FaDownload aria-hidden="true" />
                        </a>

                        <a href="https://teamstore-neon.vercel.app/" className={styles.button}>
                            <span>View TeamStore</span>
                            <FaArrowUpRightFromSquare aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;