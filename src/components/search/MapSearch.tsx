import React from "react";

import Icon from "../../assets/svg/icons/search.svg";

import s from "./Search.scss";

export const MapSearch = ({ ...props }) => (
  <div className={s.map__search} {...props}>
    <div className={s.container}>
      <span className={s.icon}>
        <Icon />
      </span>
      <input placeholder="Search..." />
    </div>
  </div>
);
