import React from "react";
import Warning from "./ActionIcons/Warning";
import styles from "./WarningMessage.module.css";

const WarningMessage = ({ text, alignitems }) => {
  let style = {};
  alignitems ? (style = { alignItems: "center" }) : "";

  return (
    <div style={style} className={styles.WarningMessage}>
      <Warning />
      <p className={styles.WarningMessage__desc}>{text}</p>
    </div>
  );
};

export default WarningMessage;
