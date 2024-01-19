"use client";
import React from "react";
import { newItems } from "../../../../data/newItems";
import NewItem from "./NewItem";
import styles from "./NewItemsList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NewItemsList = () => {
  return (
    <div className={styles.newItemsList}>
      <h2 className={styles.newItemsList__title}>Новинки</h2>

      <Swiper
        className={styles.newItemsList__slider}
        spaceBetween={44}
        slidesPerView={"auto"}
        grabCursor={true}
      >
        {newItems.map((item) => (
          <SwiperSlide
            className={styles.newItemsList__sliderItem}
            key={item.id}
          >
            <NewItem
              name={item.name}
              rating={item.rating}
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

export default NewItemsList;
