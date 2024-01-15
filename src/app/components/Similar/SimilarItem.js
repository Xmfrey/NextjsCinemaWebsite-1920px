import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SimilarItem.module.css";

const SimilarItem = ({ posterPath, posterAlt, rating, route }) => {
  return (
    <Link href={route}>
      <div className={styles.SimilarItem}>
        <Image
          className={styles.SimilarItem__image}
          src={posterPath}
          alt={posterAlt}
          width={255}
          height={382}
        />

        <div className={styles.SimilarItem__rating}> {rating} </div>
        <div className={styles.SimilarItem__opacity}></div>
      </div>
    </Link>
  );
};

export default SimilarItem;
