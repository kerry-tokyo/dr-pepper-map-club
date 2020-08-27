import React, { ReactNode } from "react";

import s from "./Breadcrumb.scss";

interface CurrentItemProps {
  children: ReactNode;
}

export const CurrentItem = ({ children }: CurrentItemProps) => (
  <li className={s.breadcrumb__current}>{children}</li>
);
