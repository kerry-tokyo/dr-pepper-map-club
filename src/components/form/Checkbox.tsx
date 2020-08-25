import React from "react";

import Check from "../../assets/svg/icons/check.svg";

import s from "./Checkbox.scss";

interface CheckBoxProps {
  text?: string;
  onChange?(): void;
}

export const CheckBox = ({ onChange, text }: CheckBoxProps) => {
  return (
    <div className={s.checkbox__container}>
      <div className={s.checkbox__inner}>
        <input className={s.checkbox} onChange={onChange} type="checkbox" />
        <span className={s.checkbox__icon}>
          <Check />
        </span>
      </div>
      <span className={s.checkbox__text}>{text}</span>
    </div>
  );
};
