"use client";
import React, { useState } from "react";
import { seriesItems } from "../../../../data/seriesItems";
import styles from "./SeriesItemSeasonsList.module.css";
import SeriesItemSeasonItem from "./SeriesItemSeasonItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SeriesItemSeasonsList = ({}) => {
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
          {seriesItems.map((item) =>
            item.seasons.map((seas, index) => (
              <button
                onClick={() => seasonsActive(index)}
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
          item.seasons[0] && item.seasons[0].series ? (
            item.seasons[0].series.map((seria) => (
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
              Серии отсутствуют или еще не вышли в релиз
            </div>
          )
        )}
      </Swiper>
    </div>
  ) : (
    <div className={styles.SeriesItemSeasonsList}>
      <div className={styles.SeriesItemSeasonsList__title}>
        <h2 className={styles.SeriesItemSeasonsList__Name}>Сезоны</h2>
        <div className={styles.SeriesItemSeasonsList__seasons}>
          {seriesItems.map((item) =>
            item.seasons.map((seas, index) =>
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
            )
          )}
        </div>
      </div>

      <Swiper spaceBetween={20} slidesPerView={3} grabCursor={true}>
        {seriesItems.map((item) =>
          item.seasons[seasonCurrent] && item.seasons[seasonCurrent].series ? (
            item.seasons[seasonCurrent].series.map((seria) => (
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
              Серии отсутствуют или еще не вышли в релиз
            </div>
          )
        )}
      </Swiper>
    </div>
  );
};

export default SeriesItemSeasonsList;
