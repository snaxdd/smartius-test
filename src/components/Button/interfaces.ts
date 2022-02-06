import { IconTypes } from "../Icon/types";

export interface ButtonProps {
  title?: string;
  classNames?: string;
  onClick?: () => void;
  icon?: IconTypes;
  iconFill?: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number | string;
}
