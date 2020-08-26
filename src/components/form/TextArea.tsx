import React from "react";

import s from "./Form.scss";

interface TextAreaProps {
  placeholder: string;
  value?: string;
  onChange?(): void;
  name?: string;
}

export const TextArea = ({
  onChange,
  value,
  placeholder,
  name,
}: TextAreaProps) => {
  return (
    <textarea
      className={s.textarea}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
  );
};
