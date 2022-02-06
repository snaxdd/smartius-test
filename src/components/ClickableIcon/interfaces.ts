import { IconTypes } from "../Icon/types";
import { COLORS } from "../../constants/colors";

export interface ClickableIconProps {
  classNames?: string;
  onClick: () => void;
  icon: IconTypes;
  active?: boolean;
  fill?: COLORS;
  activeFill?: COLORS;
}
