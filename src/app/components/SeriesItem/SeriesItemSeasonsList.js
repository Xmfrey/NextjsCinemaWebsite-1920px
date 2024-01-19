"use client";
import React, { useState } from "react";
import styles from "./SeriesItemSeasonsList.module.css";
import SeriesItemSeasonItem from "./SeriesItemSeasonItem";
import WarningMessage from "./WarningMessage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SeriesItemSeasonsList = ({ seasons }) => {
  const [seasonCurrent, setSeasonCurrent] = useState(0);

  const seasonDisable = [styles.SeriesItemSeasonsList__seasonsButtons];
  const seasonActive = [
    styles.SeriesItemSeasonsList__seasonsButtons,
    styles.active,
  ];

  return (
    <div className={styles.SeriesItemSeasonsList}>
      <div className={styles.SeriesItemSeasonsList__title}>
        <h2 className={styles.SeriesItemSeasonsList__name}>Сезоны</h2>
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

      <Swiper
        className={styles.SeriesItemSeasonsList__slider}
        spaceBetween={20}
        slidesPerView={"auto"}
        grabCursor={true}
      >
        {seasons[seasonCurrent] && seasons[seasonCurrent].series ? (
          seasons[seasonCurrent].series.map((seria) => (
            <SwiperSlide
              className={styles.SeriesItemSeasonsList__sliderItem}
              key={seria.episodeNumber}
            >
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
