import React from "react";

import s from "./Map.scss";

import Icon from "../../assets/svg/marker.svg";

export const Marker = () => (
  <div className={s.marker}>
    <Icon className={s.icon} />
  </div>
);
