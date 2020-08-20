import React, { ReactNode } from "react";

import s from "./User.scss";

interface IconProps {
  icon?: ReactNode;
}

export const Icon = ({ icon }: IconProps) => {
  return <img className={s.user__icon} src={icon} />;
};
