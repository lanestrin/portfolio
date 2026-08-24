import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaDownload } from "react-icons/fa6";

import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.content}>
					<Link to="/" className={styles.brand} aria-label="Lan Nguyen Home">
						<img src={logo} alt="Lan Nguyen" className={styles.logo} />
					</Link>

					<nav className={styles.actions} aria-label="Primary actions">
						<a
							href="/Lan-Nguyen-Resume.pdf"
							download="Lan-Nguyen-Resume.pdf"
							className={styles.iconButton}
							aria-label="Download Resume"
						>
							<FaDownload aria-hidden="true" />
						</a>

						<a
							href="/case-study"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.button}
						>
							<span>View Case Study</span>
							<FaArrowUpRightFromSquare aria-hidden="true" />
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
