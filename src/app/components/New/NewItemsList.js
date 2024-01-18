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
      <h2 className={styles.newItemsListName}>Новинки</h2>

      <div className={styles.newItemsList__swiperWrapper}>
        <Swiper spaceBetween={44} slidesPerView={3.9} grabCursor={true}>
          {newItems.map((item) => (
            <SwiperSlide key={item.id}>
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
    </div>
  );
};

export default NewItemsList;
