import { Types } from "../Icon/types";

export interface ButtonProps {
  title?: string;
  classNames?: string;
  onClick?: () => void;
  icon?: Types;
  iconFill?: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number | string;
}
