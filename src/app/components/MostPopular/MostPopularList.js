"use client";
import React from "react";
import styles from "./MostPopularList.module.css";
import { mostPopularItems } from "../../../../data/mostPopularItems";
import MostPopularItem from "./MostPopularItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MostPopularList = () => {
  return (
    <div className={styles.mostPopularList}>
      <h2 className={styles.mostPopularList__Name}>
        <span>ТОП-10</span> просмотров за неделю
      </h2>

      <Swiper
        className={styles.mostPopularList__slider}
        spaceBetween={100}
        slidesPerView={"auto"}
        grabCursor={true}
      >
        {mostPopularItems.map((item) => (
          <SwiperSlide
            className={styles.mostPopularList__sliderItem}
            key={item.top}
          >
            <MostPopularItem
              top={item.top}
              posterPath={item.posterPath}
              posterAlt={item.posterAlt}
              route={item.route}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostPopularList;
