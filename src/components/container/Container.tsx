import React, { ReactNode } from "react";

import s from "./Container.scss";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={s.container}>{children}</div>
);
