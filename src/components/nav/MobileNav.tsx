import React, { ReactNode } from "react";

import { Link } from "components/link/Link";

import s from "./Nav.scss";

interface Nav {
  icon: ReactNode;
  to: string;
}

interface MobileNavProps {
  nav: Nav[];
}

export const MobileNav = ({ nav }: MobileNavProps) => (
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
