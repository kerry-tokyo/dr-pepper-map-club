import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Card.scss";

interface CardProps {
  children?: ReactNode;
  href?: string;
}
export const Card = ({ children, href }: CardProps) => {
  const isLink = typeof href !== "undefined";
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || "");

  if (isExternal) {
    return (
      <a
        className={s.card}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {children}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link className={s.card} to={href || "#"}>
        {children}
      </Link>
    );
  }

  return <div className={s.card}>{children}</div>;
};
