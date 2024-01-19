"use client";
import React from "react";
import { similarItems } from "../../../../data/similarItems";
import SimilarItem from "./SimilarItem";
import styles from "./SimilarList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SimilarList = () => {
  return (
    <div className={styles.SimilarList}>
      <h2 className={styles.SimilarList__title}>Похожее</h2>

      <Swiper
        className={styles.SimilarList__slider}
        spaceBetween={24}
        slidesPerView={"auto"}
        grabCursor={true}
      >
        {similarItems.map((item) => (
          <SwiperSlide className={styles.SimilarList__sliderItem} key={item.id}>
            <SimilarItem
              posterPath={item.posterPath}
              posterAlt={item.posterAlt}
              rating={item.rating}
              route={item.route}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarList;
