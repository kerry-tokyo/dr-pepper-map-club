import React from "react";

import Check from "../../assets/svg/icons/check.svg";

import s from "./CheckBox.scss";

interface CheckBoxProps {
  text?: string;
  onChange?(): void;
  name?: string;
}

export const CheckBox = ({ onChange, text, name }: CheckBoxProps) => {
  return (
    <div className={s.checkbox__container}>
      <div className={s.checkbox__inner}>
        <input
          className={s.checkbox}
          onChange={onChange}
          type="checkbox"
          value={text}
          name={name}
        />
        <span className={s.checkbox__icon}>
          <Check />
        </span>
      </div>
      <span className={s.checkbox__text}>{text}</span>
    </div>
  );
};
