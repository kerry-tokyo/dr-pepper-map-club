import React, { useState, ReactNode } from "react";

import s from "./Dropdown.scss";

interface DropdownProps {
  children: ReactNode;
  button?: ReactNode;
}

export const Dropdown = ({ button, children }: DropdownProps) => {
  const [open, setContentState] = useState(false);

  return (
    <div className={s.dropdown}>
      <div
        className={s.dropdown__button}
        onClick={() => setContentState(!open)}
      >
        {button}
      </div>
      <div className={s(s.dropdown__inner, open ? "" : s.hide)}>{children}</div>
    </div>
  );
};
