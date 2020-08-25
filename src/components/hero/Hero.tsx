import React, { ReactNode } from "react";

import { Container } from "components/container/Container";
import { Button } from "components/button/Button";

import s from "./Hero.scss";

interface HeroProps {
  children: ReactNode;
  user?: boolean;
  icon?: ReactNode;
  name?: string;
}

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
