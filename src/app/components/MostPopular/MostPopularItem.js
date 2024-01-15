import React from "react";
import styles from "./MostPopularItem.module.css";
import Link from "next/link";
import Image from "next/image";

const MostPopularItem = ({ top, posterPath, posterAlt, route }) => {
  return (
    <Link href={route}>
      <div className={styles.mostPopularItem__wrapper}>
        <div className={styles.mostPopularItem__top}>{top}</div>
        <Image
          className={styles.newItem__image}
          src={posterPath}
          alt={posterAlt}
          width={398}
          height={597}
        />
      </div>
    </Link>
  );
};

export default MostPopularItem;
