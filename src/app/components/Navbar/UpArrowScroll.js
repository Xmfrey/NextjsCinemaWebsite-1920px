import React from "react";
import styles from "./upArrow.module.css";

const UpArrowScroll = () => {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.upArrow} onClick={scrollToTop}>
      <svg
        className={styles.hov}
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
      >
        <path
          d="M20.1664 15.4257V33H23.8331V15.4257L31.7036 23.2962L34.2959 20.7038L21.9998 8.40765L9.70361 20.7038L12.2959 23.2962L20.1664 15.4257Z"
          fill="#BABABA"
        />
      </svg>
    </div>
  );
};

export default UpArrowScroll;
