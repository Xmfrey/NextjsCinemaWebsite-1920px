import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ background, size, children, disable, route = "#" }) => {
  const stylesButton = [styles.button];

  background === "gradient"
    ? stylesButton.push(styles.gradient)
    : stylesButton.push(styles.black);
  size === "middle"
    ? stylesButton.push(styles.middle)
    : stylesButton.push(styles.small);
  disable ? stylesButton.push(styles.disabled) : "";

  return (
    <Link className={stylesButton.join(" ")} href={route}>
      {children}
    </Link>
  );
};

export default Button;
