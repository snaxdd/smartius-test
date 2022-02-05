import React, { FC } from "react";
import { ButtonProps } from "./interfaces";
import { Icon } from "../Icon";
import { Spinner } from "../Spinner";

export const Button: FC<ButtonProps> = ({
  onClick = () => {},
  classNames = "",
  title,
  icon,
  iconFill = "white",
  isLoading = false,
  disabled = false,
}) => {
  return (
    <button
      className={`button ${classNames}`}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {icon && (
            <Icon name={icon} fill={iconFill} classNames="button_icon" />
          )}
          <span className="button_title">{title}</span>
        </>
      )}
    </button>
  );
};
