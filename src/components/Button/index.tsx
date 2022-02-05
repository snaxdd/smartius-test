import React, { FC } from "react";
import { ButtonProps } from "./interfaces";
import { Icon } from "../Icon";

export const Button: FC<ButtonProps> = ({
  onClick = () => {},
  classNames = "",
  title,
  icon,
  iconFill = "white",
}) => {
  return (
    <button className={`button ${classNames}`}>
      {icon && <Icon name={icon} fill={iconFill} classNames="button_icon" />}
      <span className="button_title">{title}</span>
    </button>
  );
};
