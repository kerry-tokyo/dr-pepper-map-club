import React from "react";

import s from "./Form.scss";

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange?(): void;
}

export const TextArea = ({ onChange, value, placeholder }: TextAreaProps) => {
  return (
    <textarea
      className={s.textarea}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
