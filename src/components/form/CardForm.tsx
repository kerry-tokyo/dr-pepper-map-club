import React, { ReactNode } from "react";

import s from "./CardForm.scss";

interface CardProps {
  title: string;
  children?: ReactNode;
  text?: string;
}
export const CardForm = ({ title, children, text }: CardProps) => {
  return (
    <div className={s.card__form}>
      <div className={s.title__container}>
        <h1 className={s.title}>{title}</h1>
        {text ? <p className={s.text}>{text}</p> : ""}
      </div>
      <div className={s.container}>{children}</div>
    </div>
  );
};
