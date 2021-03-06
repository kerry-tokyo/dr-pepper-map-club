import React, { ReactNode } from "react";

import { Container } from "components/container/Container";

import s from "./Block.scss";

interface BlockProps {
  children: ReactNode;
}

export const Block = ({ children }: BlockProps) => (
  <section className={s.block}>
    <Container>{children}</Container>
  </section>
);
