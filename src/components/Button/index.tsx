import React, { FC } from "react";
import { ButtonProps } from "./interfaces";
import { Icon } from "../Icon";
import { Spinner } from "../Spinner";
import { COLORS } from "../../constants/colors";

export const Button: FC<ButtonProps> = ({
  onClick = () => {},
  classNames = "",
  title,
  icon,
  iconFill = COLORS.WHITE,
  isLoading = false,
  disabled = false,
  width,
}) => {
  return (
    <button
      className={`button ${classNames}`}
      disabled={disabled}
      onClick={onClick}
      style={{ width }}
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
