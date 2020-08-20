import React, { ReactNode } from 'react';

import { Link } from 'components/link/Link';

import s from './Header.scss';

interface HeaderProps {
  children: ReactNode;
  logo: ReactNode;
}

export const Header = ({ children, logo }: HeaderProps) => (
  <header id={s.header}>
        <Link to="/" className={s.header__logo}>
          {logo}
        </Link>

        <div className={s.header__navigation}>{children}</div>
  </header>
);
