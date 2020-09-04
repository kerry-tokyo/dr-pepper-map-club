import React from "react";

import s from "./Map.scss";

import Icon from "../../assets/svg/marker.svg";

export const Marker = ({ ...props }) => (
  <div className={s.marker} {...props}>
    <Icon className={s.icon} />
  </div>
);
