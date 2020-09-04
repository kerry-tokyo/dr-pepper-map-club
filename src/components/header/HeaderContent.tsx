import React, { ReactNode } from "react";

import { Link } from "components/link/Link";
import { Button } from "components/button/Button";

import s from "./HeaderContent.scss";

interface HeaderContentProps {
  name?: string;
  to?: string;
  icon?: ReactNode;
  button?: boolean;
  desktop?: boolean;
  mobile?: boolean;
  container?: boolean;
  children?: ReactNode;
}

export const HeaderContent = ({
  name,
  to,
  icon,
  button,
  desktop,
  mobile,
  container,
  children,
}: HeaderContentProps) => {
  const isButton = button;
  const isConainer = container;

  const content = () => (
    <>
      {icon && React.cloneElement(icon as any, { className: s.link__icon })}
      {name}
    </>
  );

  if (isConainer) {
    return (
      <div
        className={s(
          s.container,
          desktop ? s.desktop__content : "",
          mobile ? s.mobile__content : ""
        )}
      >
        {children}
      </div>
    );
  }

  if (isButton) {
    return (
      <div
        className={s(
          s.link__button,
          desktop ? s.desktop__content : "",
          mobile ? s.mobile__content : ""
        )}
      >
        <Button href={to}>{content()}</Button>
      </div>
    );
  }

  return (
    <Link
      className={s(
        s.link,
        desktop ? s.desktop__content : "",
        mobile ? s.mobile__content : ""
      )}
      to={to}
    >
      {content()}
    </Link>
  );
};
