import React, { FC, useState } from "react";
import { ModalProps } from "./interfaces";

export const Modal: FC<ModalProps> = ({
  children,
  isOpened = false,
  onAreaClick,
}) => {
  return (
    <div
      onClick={onAreaClick}
      className={`modal modal--${isOpened ? "opened" : "closed"}`}
    >
      {children}
    </div>
  );
};
