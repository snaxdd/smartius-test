import React, { FC, useState } from "react";
import { InputProps } from "./interfaces";

export const Input: FC<InputProps> = ({
  value,
  onChange,
  type = "text",
  classNames = "",
  placeholder,
  title,
}) => {
  let [focused, setFocused] = useState(false);
  let toggleFocused = () => setFocused((prevState) => !prevState);

  return (
    <div className={`input ${focused ? "input--focused" : ""} ${classNames}`}>
      {title && <span className="input_title">{title}</span>}
      <input
        className="input_element"
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={toggleFocused}
        onBlur={toggleFocused}
      />
    </div>
  );
};
