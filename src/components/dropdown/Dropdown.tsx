import React, { useState, useEffect, useRef, ReactNode } from "react";

import s from "./Dropdown.scss";

interface DropdownProps {
  children: ReactNode;
  button?: ReactNode;
}

export const Dropdown = ({ button, children }: DropdownProps) => {
  const [isOpen, setContentState] = useState(false);
  const popupRef = useRef();
  const documentClickHandler = useRef();

  return (
    <div className={s.dropdown}>
      <div
        className={s.dropdown__button}
        onClick={() => setContentState(!isOpen)}
      >
        {button}
      </div>
      <div
        className={s(s.dropdown__inner, isOpen ? "" : s.hide)}
        ref={popupRef}
      >
        {children}
      </div>
    </div>
  );
};
