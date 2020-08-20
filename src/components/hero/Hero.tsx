import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import s from './Hero.scss';

interface HeroProps {
  children: ReactNode;
}

export const Hero = ({ children }: HeroProps) => (
  <div className={s.hero}>
    <Container>
      {children}
    </Container>
  </div>
);
