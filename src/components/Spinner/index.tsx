import React, { FC } from "react";
import { SpinnerProps } from "./interfaces";

export const Spinner: FC<SpinnerProps> = ({ classNames = "" }) => {
  return (
    <div className={`spinner ${classNames}`}>
      <div />
      <div />
    </div>
  );
};
