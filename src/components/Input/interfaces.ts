import { ChangeEvent } from "react";

export interface InputProps {
  classNames?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type?: InputTypes;
  placeholder?: string;
}

export type InputTypes = "text" | "password" | "number";
