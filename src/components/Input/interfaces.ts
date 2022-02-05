import { ChangeEvent } from "react";
import { InputTypes } from "./types";

export interface InputProps {
  classNames?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type?: InputTypes;
  placeholder?: string;
  title?: string;
}
