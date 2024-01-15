import React from "react";

const BackgroundItem = ({ backImage, backWidth, backHeight, children }) => {
  const style = {
    backgroundImage: `url(${backImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundSize: `${backWidth} ${backHeight}`,
    height: `${backHeight}`,
  };

  return <div style={style}>{children}</div>;
};

export default BackgroundItem;
