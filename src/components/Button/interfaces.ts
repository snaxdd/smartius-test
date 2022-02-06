import { IconTypes } from "../Icon/types";
import { COLORS } from "../../constants/colors";
import { MouseEvent } from "react";

export interface ButtonProps {
  title?: string;
  classNames?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  icon?: IconTypes;
  iconFill?: COLORS;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number | string;
}
