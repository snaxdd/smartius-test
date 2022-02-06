import { IconTypes } from "../Icon/types";
import { COLORS } from "../../constants/colors";

export interface ButtonProps {
  title?: string;
  classNames?: string;
  onClick?: () => void;
  icon?: IconTypes;
  iconFill?: COLORS;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number | string;
}
