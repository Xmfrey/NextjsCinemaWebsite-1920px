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

      <Swiper spaceBetween={24} slidesPerView={6.2} grabCursor={true}>
        {similarItems.map((item) => (
          <SwiperSlide key={item.id}>
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
