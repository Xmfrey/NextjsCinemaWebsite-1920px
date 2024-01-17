"use client";
import React, { useState } from "react";
import styles from "./SeriesItemSeasonsList.module.css";
import SeriesItemSeasonItem from "./SeriesItemSeasonItem";
import WarningMessage from "./WarningMessage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SeriesItemSeasonsList = ({ seasons }) => {
  const [paginationActive, setPaginationActive] = useState(false);
  const [seasonCurrent, setSeasonCurrent] = useState(null);

  const seasonDisable = [styles.SeriesItemSeasonsList__seasonsButtons];
  const seasonActive = [
    styles.SeriesItemSeasonsList__seasonsButtons,
    styles.active,
  ];

  const seasonsActive = (seasonNumber) => {
    setPaginationActive(true);
    setSeasonCurrent(seasonNumber);
  };

  return !paginationActive ? (
    <div className={styles.SeriesItemSeasonsList}>
      <div className={styles.SeriesItemSeasonsList__title}>
        <h2 className={styles.SeriesItemSeasonsList__Name}>Сезоны</h2>
        <div className={styles.SeriesItemSeasonsList__seasons}>
          {seasons.map((seas, index) => (
            <button
              onClick={() => seasonsActive(index)}
              key={seas.season}
              className={
                seas.season === 1 ? seasonActive.join(" ") : seasonDisable
              }
            >
              {seas.season}
            </button>
          ))}
        </div>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3} grabCursor={true}>
        {seasons[0] && seasons[0].series ? (
          seasons[0].series.map((seria) => (
            <SwiperSlide key={seria.episodeNumber}>
              <SeriesItemSeasonItem
                seriesPreview={seria.seriesPreview}
                episodeNumber={seria.episodeNumber}
                episodeTime={seria.episodeTime}
              />
            </SwiperSlide>
          ))
        ) : (
          <div className={styles.NoSeries}>
            <WarningMessage
              alignitems
              text="Серии отсутствуют или еще не вышли в релиз."
            />
          </div>
        )}
      </Swiper>
    </div>
  ) : (
    <div className={styles.SeriesItemSeasonsList}>
      <div className={styles.SeriesItemSeasonsList__title}>
        <h2 className={styles.SeriesItemSeasonsList__Name}>Сезоны</h2>
        <div className={styles.SeriesItemSeasonsList__seasons}>
          {seasons.map((seas, index) =>
            seas.season === seasonCurrent + 1 ? (
              <button
                onClick={() => setSeasonCurrent(index)}
                key={seas.season}
                className={seasonActive.join(" ")}
              >
                {seas.season}
              </button>
            ) : (
              <button
                onClick={() => setSeasonCurrent(index)}
                key={seas.season}
                className={seasonDisable}
              >
                {seas.season}
              </button>
            )
          )}
        </div>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3} grabCursor={true}>
        {seasons[seasonCurrent] && seasons[seasonCurrent].series ? (
          seasons[seasonCurrent].series.map((seria) => (
            <SwiperSlide key={seria.episodeNumber}>
              <SeriesItemSeasonItem
                seriesPreview={seria.seriesPreview}
                episodeNumber={seria.episodeNumber}
                episodeTime={seria.episodeTime}
              />
            </SwiperSlide>
          ))
        ) : (
          <div className={styles.NoSeries}>
            <WarningMessage
              alignitems
              text="Серии отсутствуют или еще не вышли в релиз."
            />
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default SeriesItemSeasonsList;
