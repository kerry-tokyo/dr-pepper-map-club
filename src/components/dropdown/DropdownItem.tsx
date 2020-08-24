import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Dropdown.scss";

interface DropdownItemProps {
  children: ReactNode;
  href?: string;
  onClick?(): void;
  icon?: ReactNode;
}

export const DropdownItem = ({
  children,
  href,
  onClick,
  icon,
}: DropdownItemProps) => {
  const isLink = typeof href !== "undefined";
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || "");

  if (isExternal) {
    return (
      <a
        className={s.dropdown__item}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {children}
        {icon ? <span className={s.icon}>{icon}</span> : ""}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link className={s.dropdown__item} to={href || "#"}>
        {children}
        {icon ? <span className={s.icon}>{icon}</span> : ""}
      </Link>
    );
  }

  return (
    <button className={s.dropdown__item} onClick={onClick}>
      {children}
      {icon ? <span className={s.icon}>{icon}</span> : ""}
    </button>
  );
};
