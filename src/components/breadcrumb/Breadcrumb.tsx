import React, { ReactNode } from "react";

import { Container } from "components/container/Container";
import { Link } from "components/link/Link";

import s from "./Breadcrumb.scss";

interface BreadcrumbProps {
  children: ReactNode;
}

export const Breadcrumb = ({ children }: BreadcrumbProps) => (
  <ol className={s.breadcrumb}>{children}</ol>
);
