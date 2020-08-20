import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Button.scss";

interface SocialButtonProps {
  children: ReactNode;
  href?: string;
  onClick?(): void;
  icon?: ReactNode;
}

export const SocialButton = ({
  children,
  href,
  onClick,
  icon,
}: SocialButtonProps) => {
  const isLink = typeof href !== "undefined";
  const isExternal =
    isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || "");

  if (isExternal) {
    return (
      <a
        className={s.social__button}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className={s.icon}>{icon}</span>
        <span className={s.text}>{children}</span>
      </a>
    );
  }

  if (isLink) {
    return (
      <Link className={s.social__button} to={href || "#"}>
        <span className={s.icon}>{icon}</span>
        <span className={s.text}>{children}</span>
      </Link>
    );
  }

  return (
    <button className={s.social__button} onClick={onClick}>
      <span className={s.icon}>{icon}</span>
      <span className={s.text}>{children}</span>
    </button>
  );
};
