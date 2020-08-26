import React, { ReactNode } from "react";

import s from "./Form.scss";

interface FormProps {
  children: ReactNode;
  name?: string;
  method?: string;
  netlify?: string;
}

export const Form = ({ children, name, method, netlify }: FormProps) => {
  return (
    <form className={s.form} name={name} method={method} data-netlify={netlify}>
      {children}
    </form>
  );
};
