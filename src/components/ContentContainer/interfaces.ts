import { MouseEvent } from "react";
import { IconTypes } from "../Icon/types";

export interface ContentContainerProps {
  loading?: boolean;
  error?: string;
  title: string;
  buttonTitle: string;
  onButtonClick?: (event: MouseEvent<HTMLElement>) => void;
  buttonIcon?: IconTypes;
  classNames?: string;
}
