"use client";
import React from "react";
import { seriesItems } from "../../../../data/seriesItems";
import styles from "./SeriesItemSeasonsList.module.css";
import SeriesItemSeasonItem from "./SeriesItemSeasonItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SeriesItemSeasonsList = () => {
  let seasonActive = [
    styles.SeriesItemSeasonsList__seasonsButtons,
    styles.active,
  ];

  let seasonDisable = [styles.SeriesItemSeasonsList__seasonsButtons];

  return (
    <div className={styles.SeriesItemSeasonsList}>
      <div className={styles.SeriesItemSeasonsList__title}>
        <h2 className={styles.SeriesItemSeasonsList__Name}>Сезоны</h2>
        <div className={styles.SeriesItemSeasonsList__seasons}>
          {seriesItems.map((item) =>
            item.seasons.map((seas) => (
              <button
                key={seas.season}
                className={
                  seas.season === 1 ? seasonActive.join(" ") : seasonDisable
                }
              >
                {seas.season}
              </button>
            ))
          )}
        </div>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3} grabCursor={true}>
        {seriesItems.map((item) =>
          item.seasons.map((seas) =>
            seas.series?.map((seria) => (
              <SwiperSlide>
                <SeriesItemSeasonItem
                  key={seria.episodeNumber}
                  seriesPreview={seria.seriesPreview}
                  episodeNumber={seria.episodeNumber}
                  episodeTime={seria.episodeTime}
                />
              </SwiperSlide>
            ))
          )
        )}
      </Swiper>
    </div>
  );
};

export default SeriesItemSeasonsList;
