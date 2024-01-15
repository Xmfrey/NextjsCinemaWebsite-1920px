import React from "react";
import styles from "./SeriesItemSeasonItem.module.css";
import Image from "next/image";

const SeriesItemSeasonItem = ({
  seriesPreview,
  episodeNumber,
  episodeTime,
}) => {
  return (
    <div className={styles.SeriesItemSeasonItem}>
      <Image
        className={styles.SeriesItemSeasonItem__image}
        src={seriesPreview}
        alt="Series"
        width={544}
        height={306}
      />

      <div className={styles.SeriesItemSeasonItem__timeLine}></div>
      <div className={styles.SeriesItemSeasonItem__episodeNumber}>
        {episodeNumber}
      </div>
      <div className={styles.SeriesItemSeasonItem__time}>{episodeTime}</div>
    </div>
  );
};

export default SeriesItemSeasonItem;
