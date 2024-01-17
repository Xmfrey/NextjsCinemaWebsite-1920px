import React from "react";
import WarningMessage from "./WarningMessage";
import styles from "./SeriesItemDesc.module.css";

const SeriesItemDesc = ({ mainDesc, warning }) => {
  return (
    <div className={styles.SeriesItemDesc}>
      <div className={styles.SeriesItemDesc__title}>Описание</div>

      <p className={styles.SeriesItemDesc__info}>{mainDesc}</p>

      {warning && (
        <WarningMessage
          text="Контент может содержать сцены курения и употребления спиртных напитков.
        Курение и чрезмерное употребление алкоголя вредит вашему здоровью."
        />
      )}
    </div>
  );
};

export default SeriesItemDesc;
