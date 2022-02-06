import { MouseEvent } from "react";

export interface ModalProps {
  isOpened?: boolean;
  onAreaClick?: (event: MouseEvent<HTMLElement>) => void;
}
