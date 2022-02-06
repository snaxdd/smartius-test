import React, { FC } from "react";
import { ClickableIconProps } from "./interfaces";
import { Icon } from "../Icon";
import { COLORS } from "../../constants/colors";

export const ClickableIcon: FC<ClickableIconProps> = ({
  icon,
  onClick,
  fill = COLORS.TEXT_DARK_LIGHTEN,
  active = false,
  activeFill = COLORS.ACCENT,
  classNames = "",
}) => {
  return (
    <span className={`clickable-icon ${classNames}`} onClick={onClick}>
      <Icon name={icon} fill={active ? activeFill : fill} />
    </span>
  );
};
