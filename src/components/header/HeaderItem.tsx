import React, { ReactNode } from "react";

import s from "./HeaderItem.scss";

interface HeaderItemProps {
  children: ReactNode;
}

export const HeaderItem = ({ children }: HeaderItemProps) => {
  return <div className={s.header__item}>{children}</div>;
};
