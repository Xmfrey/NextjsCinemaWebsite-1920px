import styles from "./mainBlockHome.module.css";
import Image from "next/image";
import React from "react";
import Button from "../UI/Button";
import BackgroundItem from "../Background/BackgroundItem";

const MainBlockHome = () => {
  return (
    <div className={styles.mainBlock}>
      <BackgroundItem
        backImage={"/mainBlock/mainBlock-image.jpg"}
        backWidth={"1250px"}
        backHeight={"800px"}
      >
        <div className={styles.mainBlock__innerWrapper}>
          <div className={styles.mainBlock__Info}>
            <Image
              src="/mainBlock/mainBlockName-image.png"
              alt="Индиана Джонс и колесо судьбы"
              width={576}
              height={228}
            />

            <p className={styles.mainBlockInfo__desc}>
              Неувядающий авантюрист и пытливый археолог-исследователь
              по‑прежнему в седле.
            </p>

            <div className={styles.mainBlockInfo__buttonGroup}>
              <Button background={"gradient"} size={"middle"}>
                Смотреть
              </Button>
              <Button background={"black"} size={"middle"}>
                О фильме
              </Button>
            </div>
          </div>
        </div>
      </BackgroundItem>
    </div>
  );
};

export default MainBlockHome;
