import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Breadcrumb.scss";

interface LinkItemProps {
  children: ReactNode;
  href: string;
}

export const LinkItem = ({ children, href }: LinkItemProps) => (
  <li className={s.breadcrumb__link}>
    <Link to={href}>{children}</Link>
  </li>
);
