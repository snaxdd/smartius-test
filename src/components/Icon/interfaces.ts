import { IconTypes } from "./types";
import { COLORS } from "../../constants/colors";

export interface IconProps {
  name: IconTypes;
  fill?: COLORS;
  classNames?: string;
}
