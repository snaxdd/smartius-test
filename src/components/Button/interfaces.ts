import { IconNames } from "../Icon/iconNames";

export interface ButtonProps {
  title?: string;
  classNames?: string;
  onClick?: () => void;
  icon?: IconNames;
  iconFill?: string;
}
