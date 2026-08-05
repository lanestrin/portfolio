import { useEffect, useState } from "react";

import { defaultCoverLetter } from "../../data";
import CoverLetterForm from "./CoverLetterForm";
import CoverLetterPreview from "./CoverLetterPreview";
import styles from "./CoverLetter.module.scss";
import type { CoverLetterData } from "../../data/coverLetter";

const STORAGE_KEY = "lan-nguyen-cover-letter";

const createDefaultCoverLetter = (): CoverLetterData => ({
  ...defaultCoverLetter,
  application: {
    ...defaultCoverLetter.application,
  },
  content: {
    ...defaultCoverLetter.content,
  },
});

const getInitialCoverLetter = (): CoverLetterData => {
  if (typeof window === "undefined") {
    return createDefaultCoverLetter();
  }

  const savedCoverLetter = window.localStorage.getItem(STORAGE_KEY);

  if (!savedCoverLetter) {
    return createDefaultCoverLetter();
  }

  try {
    const parsedCoverLetter = JSON.parse(
      savedCoverLetter,
    ) as Partial<CoverLetterData>;

    return {
      ...createDefaultCoverLetter(),
      ...parsedCoverLetter,
      application: {
        ...defaultCoverLetter.application,
        ...parsedCoverLetter.application,
      },
      content: {
        ...defaultCoverLetter.content,
        ...parsedCoverLetter.content,
      },
    };
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);

    return createDefaultCoverLetter();
  }
};

const sanitizeFileName = (value: string) =>
  value
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CoverLetterBuilder = () => {
  const [coverLetter, setCoverLetter] = useState<CoverLetterData>(
    getInitialCoverLetter,
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(coverLetter));
  }, [coverLetter]);

  const handleReset = () => {
    const shouldReset = window.confirm(
      "Reset this cover letter to the default template? Your current changes will be removed.",
    );

    if (!shouldReset) {
      return;
    }

    setCoverLetter(createDefaultCoverLetter());
  };

  const handlePrint = () => {
    const previousTitle = document.title;

    const company =
      sanitizeFileName(coverLetter.application.company) || "Company";

    const position =
      sanitizeFileName(coverLetter.application.position) || "Position";

    document.title = `Lan-Nguyen_${company}_${position}_Cover-Letter`;

    const restoreTitle = () => {
      document.title = previousTitle;
    };

    window.addEventListener("afterprint", restoreTitle, {
      once: true,
    });

    window.print();
  };

  return (
    <main className={styles.builder}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarContent}>
          <div>
            <p className={styles.toolbarEyebrow}>Cover Letter Builder</p>

            <p className={styles.saveStatus}>
              Changes save automatically in this browser.
            </p>
          </div>

          <div className={styles.toolbarActions}>
            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
            >
              Reset Template
            </button>

            <button
              type="button"
              className={styles.downloadButton}
              onClick={handlePrint}
            >
              Download Cover Letter
            </button>
          </div>
        </div>
      </div>

      <div className={styles.workspace}>
        <CoverLetterForm coverLetter={coverLetter} onChange={setCoverLetter} />

        <CoverLetterPreview coverLetter={coverLetter} />
      </div>
    </main>
  );
};

export default CoverLetterBuilder;
