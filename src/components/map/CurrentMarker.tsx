import React from "react";

import s from "./Map.scss";

const CurrentMarker = ({ ...props }) => {
  return (
    <div className={s.current__marker} {...props}>
      <div className={s.pin__container}>
        <div className={s.pin}></div>
        <div className={s.pin__effect}></div>
      </div>
    </div>
  );
};

export default CurrentMarker;
