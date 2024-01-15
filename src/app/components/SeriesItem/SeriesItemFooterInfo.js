import React from "react";
import styles from "./SeriesItemFooterInfo.module.css";
import Link from "next/link";

const SeriesItemFooterInfo = ({
  premiere,
  mainName,
  country,
  genre,
  language,
  quality,
}) => {
  return (
    <div className={styles.SeriesItemFooterInfo}>
      <h2 className={styles.SeriesItemFooterInfo__title}> Информация </h2>

      <div className={styles.SeriesItemFooterInfo__columns}>
        <div className={styles.SeriesItemFooterInfo__column}>
          <div className={styles.SeriesItemFooterInfo__columnItem}>
            <div className={styles.SeriesItemFooterInfo__fieldName}>
              Премьера в мире
            </div>
            <div className={styles.SeriesItemFooterInfo__fieldContent}>
              {premiere}
            </div>
          </div>
          <div className={styles.SeriesItemFooterInfo__columnItem}>
            <div className={styles.SeriesItemFooterInfo__fieldName}>
              Оригинальное название
            </div>
            <div className={styles.SeriesItemFooterInfo__fieldContent}>
              {mainName}
            </div>
          </div>
        </div>
        <div className={styles.SeriesItemFooterInfo__column}>
          <div className={styles.SeriesItemFooterInfo__columnItem}>
            <div className={styles.SeriesItemFooterInfo__fieldName}>Страна</div>
            <div className={styles.SeriesItemFooterInfo__fieldContent}>
              {country}
            </div>
          </div>
          <div className={styles.SeriesItemFooterInfo__columnItem}>
            <div className={styles.SeriesItemFooterInfo__fieldName}>Жанры</div>
            <div className={styles.SeriesItemFooterInfo__fieldContent}>
              {genre.map((gen) => (
                <Link
                  className={styles.SeriesItemFooterInfo__fieldGenreLink}
                  href={gen.genreRoute}
                >
                  {gen.genreName}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.SeriesItemFooterInfo__column}>
          <div className={styles.SeriesItemFooterInfo__columnItem}>
            <div className={styles.SeriesItemFooterInfo__fieldName}>
              Язык аудиодорожки
            </div>
            <div className={styles.SeriesItemFooterInfo__fieldContent}>
              {language}
            </div>
          </div>
          <div className={styles.SeriesItemFooterInfo__columnItem}>
            <div className={styles.SeriesItemFooterInfo__fieldName}>
              Качество
            </div>
            <div className={styles.SeriesItemFooterInfo__fieldContentChip}>
              {quality}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesItemFooterInfo;
