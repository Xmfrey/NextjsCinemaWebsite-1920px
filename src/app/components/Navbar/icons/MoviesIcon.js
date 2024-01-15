import styles from "./icons.module.css";

const MoviesIcon = () => {
  return (
    <svg
      className={styles.hov}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
    >
      <path
        d="M36.6665 5.5L7.33317 5.5C5.311 5.5 3.6665 7.1445 3.6665 9.16667L3.6665 29.3333C3.6665 31.3555 5.311 33 7.33317 33H14.6665L11.3665 37.4L14.2998 39.6L19.2498 33H24.7498L29.6998 39.6L32.6332 37.4L29.3332 33H36.6665C38.6887 33 40.3332 31.3555 40.3332 29.3333V9.16667C40.3332 7.1445 38.6887 5.5 36.6665 5.5ZM7.33317 29.3333L7.33317 9.16667L36.6665 9.16667L36.6683 29.3333L7.33317 29.3333Z"
        fill="#BABABA"
      />
      <path d="M11 22H18.3333V25.6667H11V22Z" fill="#BABABA" />
    </svg>
  );
};

export default MoviesIcon;
