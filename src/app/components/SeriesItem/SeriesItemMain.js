import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import BackgroundItem from "../Background/BackgroundItem";
import Favorite from "./ActionIcons/Favorite";
import WillWatch from "./ActionIcons/WillWatch";
import styles from "./SeriesItemMain.module.css";

const SeriesItemMain = ({
  pictureBackground,
  PictureName,
  nameAlt,
  rating,
  year,
  season,
  country,
  genre,
  mpaa,
  shortDesc,
}) => {
  return (
    <BackgroundItem
      backImage={pictureBackground}
      backWidth={"1400px"}
      backHeight={"780px"}
    >
      <div className={styles.seriesItemMain}>
        <div className={styles.seriesItemMain__infoBlock}>
          <Image
            className={styles.seriesItemMain__imageName}
            src={PictureName}
            alt={nameAlt}
            width={367}
            height={132}
            priority
          />

          <div className={styles.seriesItemMain__infoGroup}>
            <span>{rating}</span> <span>{year}</span> <span>{season}</span>
            <span>{country}</span> <span>{genre}</span>
            <span>{mpaa}</span>
          </div>

          <p className={styles.seriesItemMain__infoDesc}>{shortDesc}</p>

          <div className={styles.seriesItemMain__buttonsGroup}>
            <Button background={"gradient"} size={"small"}>
              Смотреть
            </Button>
            <Button>Трейлер</Button>
            <Button>
              <Favorite />
            </Button>
            <Button>
              <WillWatch />
            </Button>
          </div>
        </div>
      </div>
    </BackgroundItem>
  );
};

export default SeriesItemMain;
