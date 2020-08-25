import React, { ReactNode } from "react";

import s from "./Form.scss";

interface LabelProps {
  children: ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <p className={s.label}>{children}</p>;
};
