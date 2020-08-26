import React from "react";
import { Helmet } from "react-helmet";
import Div100vh from "react-div-100vh";

import BaseLayout from "components/layout/BaseLayout";
import { NavButtonContainer } from "components/nav/NavButtonContainer";
import { NavButton } from "components/nav/NavButton";
import KerryMap from "components/map/KerryMap";

import Add from "../assets/svg/icons/add.svg";
import Location from "../assets/svg/icons/current-location.svg";

// tslint:disable no-default-export
export default () => (
  <BaseLayout>
    <Helmet title="Home" />
    <Div100vh>
      <KerryMap />
      <NavButtonContainer>
        <NavButton icon={<Location />} />
        <NavButton primary icon={<Add />} />
      </NavButtonContainer>
    </Div100vh>
  </BaseLayout>
);

export const Hero = ({ children, user, icon, name }: HeroProps) => {
  const isUser = user;
  if (isUser) {
    return (
      <div className={s(s.hero, s.hero__user)}>
        <Container>
          <img className={s.icon} src={icon} />
          <h1 className={s.name}>{name}</h1>
          <Button href="/settings">Settings</Button>
        </Container>
      </div>
    );
  }

  return (
    <div className={s.hero}>
      <Container>{children}</Container>
    </div>
  );
};
