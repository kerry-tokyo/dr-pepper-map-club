import React, { ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Logo from "../../assets/svg/logo.svg";

import { helmet } from "../../utils/helmet";
import { Header } from "../header/Header";
import { HeaderContent } from "../header/HeaderContent";
import { MobileNav } from "../nav/MobileNav";
import { Icon } from "../user/Icon";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/DropdownItem";

import UserIcon from "../../assets/images/user_icon.jpg";
import Location from "../../assets/svg/icons/current-location.svg";

import User from "../../assets/svg/icons/user.svg";
import Like from "../../assets/svg/icons/like.svg";
import Settings from "../../assets/svg/icons/Settings.svg";

import s from "./BaseLayout.scss";

interface BaseLayoutProps {
  children: ReactNode;
}

export default ({ children }: BaseLayoutProps) => {
  const [user, setUser] = useState<User | null>(null);

  //  useEffect(() => {
  //  return firebase.auth().onAuthStateChanged((user) => {
  //  setUser(user);
  //});
  // }, []);

  return (
    <div className={s.layout}>
      <Helmet {...helmet} />

      <Header logo={<Logo />}>
        {user ? (
          <>
            <Dropdown button={<Icon icon={UserIcon} />}>
              <DropdownItem href="/mypage" icon={<User />}>
                My Page
              </DropdownItem>
              <DropdownItem href="/mypage" icon={<Settings />}>
                Settings
              </DropdownItem>
              <DropdownItem>Sign Out</DropdownItem>
            </Dropdown>
          </>
        ) : (
          <>
            <HeaderContent desktop to="/usage" name="Usage" />
            <HeaderContent desktop to="/signin" button name="Sign In" />
          </>
        )}
      </Header>
      {user ? (
        <MobileNav
          nav={[
            { icon: <Location />, to: "/" },
            { icon: <Like />, to: "/like" },
            { icon: <User />, to: "/mypage" },
          ]}
        />
      ) : (
        <MobileNav
          nav={[
            { icon: <Location />, to: "/" },
            { icon: <User />, to: "/signin" },
          ]}
        />
      )}
      {children}
    </div>
  );
};
