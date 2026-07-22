import { FiDatabase, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiReactrouter,
  SiSass,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import styles from "./CaseStudyFooter.module.scss";

const TEAMSTORE_URL = "https://teamstore-neon.vercel.app/demo";

const technologies = [
  {
    label: "React",
    icon: SiReact,
    className: "react",
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    className: "typescript",
  },
  {
    label: "Vite",
    icon: SiVite,
    className: "vite",
  },
  {
    label: "React Router",
    icon: SiReactrouter,
    className: "router",
  },
  {
    label: "Convex",
    icon: FiDatabase,
    className: "convex",
  },
  {
    label: "SCSS Modules",
    icon: SiSass,
    className: "sass",
  },
];

export default function CaseStudyFooter() {
  return (
    <section
      className={styles.closingSection}
      aria-labelledby="technology-title"
    >
      <div className={`${styles.layout} container`}>
        <div className={styles.technology}>
          <header className={styles.header}>
            <h2 id="technology-title">A Practical Frontend Foundation</h2>

            <p>
              A modern React architecture with a clear data model, real-time
              backend services, and scoped styling for a scalable commerce
              experience.
            </p>
          </header>

          <ul className={styles.technologyList} aria-label="Technology stack">
            {technologies.map(({ label, icon: Icon, className }) => (
              <li
                key={label}
                className={`${styles.technologyItem} ${styles[className]}`}
              >
                <Icon aria-hidden={true} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.demo}>
          <h2>Explore the Working Build</h2>

          <p>
            View the completed commerce experience and the latest progress on
            the TeamStore creation workflow.
          </p>

          <a
            className={styles.demoButton}
            href={TEAMSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View current build
            <FiExternalLink aria-hidden={true} />
          </a>
        </div>
      </div>
    </section>
  );
}
