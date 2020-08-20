import React, { ReactNode } from "react";

import s from "./Nav.scss";

interface CardProps {
  children?: ReactNode;
}
export const NavButtonContainer = ({ children }: CardProps) => {
  return <div className={s.nav__button__container}>{children}</div>;
};
