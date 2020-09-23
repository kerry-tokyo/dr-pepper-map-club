import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import { firebase } from "../../firebase";

import { helmet } from "../../utils/helmet";
import { Header } from "components/header/Header";
import { HeaderContent } from "components/header/HeaderContent";
import {} from "components/header/HeaderContent";
import { Icon } from "components/user/Icon";
import { Dropdown } from "components/dropdown/Dropdown";
import { DropdownItem } from "components/dropdown/DropdownItem";

import Logo from "../../assets/svg/logo.svg";
import User from "../../assets/svg/icons/user.svg";
import Settings from "../../assets/svg/icons/settings.svg";
import Other from "../../assets/svg/icons/other.svg";
import Usage from "../../assets/svg/icons/usage.svg";
import Feedback from "../../assets/svg/icons/feedback.svg";
import Privacy from "../../assets/svg/icons/privacy.svg";
import Terms from "../../assets/svg/icons/terms.svg";

import s from "./BaseLayout.scss";

interface BaseLayoutProps {
  children: ReactNode;
  text?: boolean;
}

export default ({ children, text }: BaseLayoutProps) => {
  const user = firebase.auth().currentUser;

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        location.href = "/";
      });
  };

  return (
    <div className={s.layout}>
      <Helmet {...helmet} />

      <Header logo={<Logo />}>
        {user ? (
          <>
            <HeaderContent container>
              <Dropdown button={<Icon icon={user && user.photoURL} />}>
                <DropdownItem href="/mypage" icon={<User />}>
                  My Page
                </DropdownItem>
                <DropdownItem href="/settings" icon={<Settings />}>
                  Settings
                </DropdownItem>
                <hr />
                <DropdownItem onClick={handleLogout}>Sign Out</DropdownItem>
              </Dropdown>
            </HeaderContent>
          </>
        ) : (
          <>
            <HeaderContent desktop to="/usage" name="Usage" />
            <HeaderContent to="/signin" button name="Sign In" />
          </>
        )}
        <HeaderContent container>
          <Dropdown button={<Other />}>
            <DropdownItem href="/usage" icon={<Usage />}>
              Usage
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
        </HeaderContent>
      </Header>
      <div className={s(text ? s.text__layout : "")}>{children}</div>
    </div>
  );
};
