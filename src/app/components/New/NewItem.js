import Link from "next/link";
import React from "react";
import styles from "./NewItem.module.css";
import Image from "next/image";

const NewItem = ({ name, rating, posterPath, posterAlt, route }) => {
  return (
    <Link href={route} className={styles.newItem__wrapper}>
      <div className={styles.newItem}>
        <Image
          className={styles.newItem__image}
          src={posterPath}
          alt={posterAlt}
          width={398}
          height={597}
        />
        <div className={styles.newItem__opacity}></div>
        <div className={styles.newItem__rating}>{rating}</div>
      </div>

      <div className={styles.newItem__name}>{name}</div>
    </Link>
  );
};

export default NewItem;
