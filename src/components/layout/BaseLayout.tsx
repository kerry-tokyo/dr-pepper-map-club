import React, { ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { auth, firebase } from "../../firebase";

import Logo from "../../assets/svg/logo.svg";

import { helmet } from "../../utils/helmet";
import { Header } from "../header/Header";
import { HeaderContent } from "../header/HeaderContent";
import { HeaderItem } from "../header/HeaderItem";
import { MobileNav } from "../nav/MobileNav";
import { Icon } from "../user/Icon";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownItem } from "../dropdown/DropdownItem";

import Location from "../../assets/svg/icons/current-location.svg";
import User from "../../assets/svg/icons/user.svg";
import Like from "../../assets/svg/icons/like.svg";
import Settings from "../../assets/svg/icons/settings.svg";
import Other from "../../assets/svg/icons/other.svg";
import Usage from "../../assets/svg/icons/usage.svg";
import Help from "../../assets/svg/icons/help.svg";
import Feedback from "../../assets/svg/icons/feedback.svg";
import Privacy from "../../assets/svg/icons/privacy.svg";
import Terms from "../../assets/svg/icons/terms.svg";

import s from "./BaseLayout.scss";

interface BaseLayoutProps {
  children: ReactNode;
  text?: boolean;
}

export default ({ children, text }: BaseLayoutProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className={s.layout}>
      <Helmet {...helmet} />

      <Header logo={<Logo />}>
        {user ? (
          <>
            <HeaderItem>
              <Dropdown button={<Icon icon={user && user.photoURL} />}>
                <DropdownItem href="/mypage" icon={<User />}>
                  My Page
                </DropdownItem>
                <DropdownItem href="/like" icon={<Like />}>
                  Like
                </DropdownItem>
                <DropdownItem href="/settings" icon={<Settings />}>
                  Settings
                </DropdownItem>
                <hr />
                <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
              </Dropdown>
            </HeaderItem>
          </>
        ) : (
          <>
            <HeaderContent desktop to="/usage" name="Usage" />
            <HeaderContent desktop to="/signin" button name="Sign In" />
          </>
        )}
        <HeaderItem>
          <Dropdown button={<Other />}>
            <DropdownItem href="/usage" icon={<Usage />}>
              Usage
            </DropdownItem>
            <DropdownItem href="/help" icon={<Help />}>
              Help
            </DropdownItem>
            <DropdownItem href="/feedback" icon={<Feedback />}>
              Feedback
            </DropdownItem>
            <DropdownItem href="/imprint" icon={<User />}>
              Imprint
            </DropdownItem>
            <hr />
            <DropdownItem href="/privacy" icon={<Privacy />}>
              Privacy Policy
            </DropdownItem>
            <DropdownItem href="/tos" icon={<Terms />}>
              Terms of Service
            </DropdownItem>
          </Dropdown>
        </HeaderItem>
      </Header>
      {user ? (
        <MobileNav
          nav={[
            { icon: <Location />, to: "/location" },
            { icon: <Like />, to: "/like" },
            { icon: <User />, to: "/mypage" },
            { icon: <Settings />, to: "/settings" },
          ]}
        />
      ) : (
        <MobileNav nav={[{ icon: <Location />, to: "/" }]} />
      )}
      <div className={s(text ? s.text__layout : "")}>{children}</div>
    </div>
  );
};
