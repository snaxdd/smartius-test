import React, { FC } from "react";
import { HeaderProps } from "./interfaces";

export const Header: FC<HeaderProps> = ({ classNames = "" }) => {
  return <header className={`header ${classNames}`} />;
};
