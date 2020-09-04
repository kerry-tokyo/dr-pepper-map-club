import React from "react";

import s from "./Form.scss";

interface InputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  onClick?(): void;
  src?: string;
  ref?: string;
}

export const Input = ({
  onChange,
  value,
  placeholder,
  defaultValue,
  type,
  ref,
  src,
  onClick,
}: InputProps) => {
  const isIcon = src;

  if (isIcon) {
    return (
      <div className={s.upload__icon}>
        <input
          ref={ref}
          onChange={onChange}
          accept=".jpg, .svg"
          style={{ display: "none" }}
          type="file"
        />
        <img
          className={s.upload__img}
          src={src}
          alt="profile icon"
          onClick={onClick}
        />
        <p className={s.upload__helper__text} onClick={onClick}>
          Change profile image
        </p>
      </div>
    );
  }
  return (
    <div className={s.input__container}>
      <input
        className={s.input}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};
