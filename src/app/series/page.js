import SeriesItemProd from "../components/SeriesItem/SeriesItemProd";
import styles from "./series.module.css";

const Series = () => {
  return (
    <div className={styles.seriesPage}>
      <SeriesItemProd />
    </div>
  );
};

export default Series;
