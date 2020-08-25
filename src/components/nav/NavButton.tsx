import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Nav.scss";

interface NavButtonProps {
  href?: string;
  onClick?(): void;
  icon?: ReactNode;
  primary?: boolean;
}

export const NavButton = ({ href, onClick, icon, primary }: NavButtonProps) => {
  const isLink = typeof href !== "undefined";
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || "");

  if (isExternal) {
    return (
      <a
        className={primary ? s.nav__button__primary : s.nav__button}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        {icon}
      </a>
    );
  }

  if (isLink) {
    return (
      <Link
        className={primary ? s.nav__button__primary : s.nav__button}
        to={href || "#"}
      >
        {icon}
      </Link>
    );
  }

  return (
    <button
      className={primary ? s.nav__button__primary : s.nav__button}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
