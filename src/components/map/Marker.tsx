import React from "react";

import s from "./Map.scss";

import Icon from "../../assets/svg/marker.svg";

const Marker = (props: any) => {
  return <Icon className={s.marker} />;
};

export default Marker;
