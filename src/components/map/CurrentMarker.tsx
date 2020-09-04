import React from "react";

import s from "./Map.scss";

const CurrentMarker = () => {
  return (
    <div className={s.current__marker}>
      <div className={s.pin__container}>
        <div className={s.pin}></div>
        <div className={s.pin__effect}></div>
      </div>
    </div>
  );
};

export default CurrentMarker;
