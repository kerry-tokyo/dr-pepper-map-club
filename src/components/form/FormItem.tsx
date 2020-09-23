import React, { ReactNode } from "react";

import s from "./Form.scss";

import { Label } from "components/form/Label";

interface FormItemProps {
  children: ReactNode;
  label?: boolean;
}

export const FormItem = ({ children, label }: FormItemProps) => {
  return (
    <div className={s.form__item}>
      {label ? <Label>{label}</Label> : ""}
      {children}
    </div>
  );
};
