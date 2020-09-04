import React, { ReactNode } from "react";

import s from "./Form.scss";

interface FormProps {
  children: ReactNode;
  name?: string;
  method?: string;
  netlify?: string;
  action?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = ({
  children,
  name,
  method,
  netlify,
  action,
  onSubmit,
}: FormProps) => {
  return (
    <form
      className={s.form}
      name={name}
      method={method}
      data-netlify={netlify}
      action={action}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};
