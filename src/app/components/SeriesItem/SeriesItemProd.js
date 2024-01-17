import React from "react";
import { seriesItems } from "../../../../data/seriesItems";
import SeriesItemMain from "./SeriesItemMain";
import SeriesItemDesc from "./SeriesItemDesc";
import SimilarList from "../Similar/SimilarList";
import SeriesItemFooterInfo from "./SeriesItemFooterInfo";
import SeriesItemSeasonsList from "./SeriesItemSeasonsList";

const SeriesItemProd = () => {
  let seasons = [];
  seriesItems.map((item) => {
    seasons = item.seasons;
  });

  return (
    <div>
      {seriesItems.map((item) => (
        <div key={item.id}>
          <SeriesItemMain
            pictureBackground={item.mainInfo.pictureBackground}
            PictureName={item.mainInfo.pictureName}
            nameAlt={item.mainInfo.nameAlt}
            rating={item.mainInfo.rating}
            year={item.mainInfo.year}
            season={item.mainInfo.season}
            country={item.mainInfo.country}
            genre={item.mainInfo.genre}
            mpaa={item.mainInfo.mpaa}
            shortDesc={item.mainInfo.shortDescription}
          />

          <SeriesItemSeasonsList seasons={seasons} />

          <SeriesItemDesc
            mainDesc={item.mainDescription.Description}
            warning={item.mainDescription.warning}
          />

          <SimilarList />

          <SeriesItemFooterInfo
            premiere={item.footerInfo.premiere}
            mainName={item.footerInfo.mainName}
            country={item.footerInfo.country}
            genre={item.footerInfo.genre}
            language={item.footerInfo.language}
            quality={item.footerInfo.quality}
          />
        </div>
      ))}
    </div>
  );
};

export default SeriesItemProd;
