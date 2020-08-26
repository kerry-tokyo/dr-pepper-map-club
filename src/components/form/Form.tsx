import React, { ReactNode } from "react";

import s from "./Form.scss";

interface FormProps {
  children: ReactNode;
  name?: string;
  method?: string;
  netlify?: string;
  action?: string;
}

export const Form = ({
  children,
  name,
  method,
  netlify,
  action,
}: FormProps) => {
  return (
    <form
      className={s.form}
      name={name}
      method={method}
      data-netlify={netlify}
      action={action}
    >
      {children}
    </form>
  );
};
