import React, { useState, ReactNode } from "react";

import s from "./Map.scss";

import Pen from "../../assets/svg/icons/pen.svg";
import Icon from "../../assets/svg/marker.svg";

interface MarkerProps {
  children: ReactNode;
}

export const Marker = ({ children }: MarkerProps) => {
  const [isOpen, setContentState] = useState(false);

  return (
    <div className={s.marker}>
      <div
        className={s.dropdown__button}
        onClick={() => setContentState(!isOpen)}
      >
        <Icon className={s.icon} />
      </div>
      <div className={s(s.dropdown__inner, isOpen ? "" : s.hide)}>
        <h6 className={s.title}>Place</h6>
        <p className={s.text}>{children}</p>
      </div>
      <div
        className={s(s.dropdown__bg, isOpen ? "" : s.hide)}
        onClick={() => setContentState(!isOpen)}
      ></div>
    </div>
  );
};
