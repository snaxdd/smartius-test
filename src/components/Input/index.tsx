import React, { FC, useState } from "react";
import { InputProps } from "./interfaces";

export const Input: FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  classNames = "",
  placeholder,
}) => {
  let [focused, setFocused] = useState(false);
  let toggleFocused = () => setFocused((prevState) => !prevState);

  return (
    <input
      className={`input ${focused ? "input--focused" : ""} ${classNames}`}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={toggleFocused}
      onBlur={toggleFocused}
    />
  );
};
