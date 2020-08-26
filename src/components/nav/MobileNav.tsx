import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Nav.scss";

interface Nav {
  icon: ReactNode;
  to: string;
}

interface MobileNavProps {
  nav?: Nav[];
  button?: boolean;
  children?: ReactNode;
}

export const MobileNav = ({ nav, button, children }: MobileNavProps) => {
  const isButton = button;
  if (isButton) {
    return (
      <nav className={s(s.mobile__nav, s.mobile__nav__button)}>
        <div className={s.inner}>{children}</div>
      </nav>
    );
  }
  return (
    <nav className={s.mobile__nav}>
      <div className={s.inner}>
        {nav.map((item) => (
          <Link
            key={item.to}
            className={s.item}
            activeClassName={s.active}
            to={item.to}
          >
            <span className={s.icon}>{item.icon}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
