import React from "react";
import Warning from "./ActionIcons/Warning";
import styles from "./WarningMessage.module.css";

const WarningMessage = () => {
  return (
    <div className={styles.WarningMessage}>
      <Warning />
      <p className={styles.WarningMessage__desc}>
        Контент может содержать сцены курения и употребления спиртных напитков.
        Курение и чрезмерное употребление алкоголя вредит вашему здоровью.
      </p>
    </div>
  );
};

export default WarningMessage;
