import React, { FC } from "react";
import { IconProps } from "./interfaces";
import { ReactComponent as IconAdd } from "./../../assets/icons/Icon_add.svg";
import { ReactComponent as IconArrow } from "./../../assets/icons/icon_arrow.svg";
import { ReactComponent as IconBold } from "./../../assets/icons/icon_bold.svg";
import { ReactComponent as IconClose } from "./../../assets/icons/icon_close.svg";
import { ReactComponent as IconCursor } from "./../../assets/icons/icon_cursor.svg";
import { ReactComponent as IconDelete } from "./../../assets/icons/icon_delete.svg";
import { ReactComponent as IconEdit } from "./../../assets/icons/icon_edit.svg";
import { ReactComponent as IconItalic } from "./../../assets/icons/icon_italic.svg";
import { ReactComponent as IconListDisordered } from "./../../assets/icons/icon_list_disordered.svg";
import { ReactComponent as IconListOrdered } from "./../../assets/icons/icon_list_ordered.svg";
import { ReactComponent as IconReplay } from "./../../assets/icons/icon_replay.svg";
import { ReactComponent as IconUnderline } from "./../../assets/icons/icon_underline.svg";
import { COLORS } from "../../constants/colors";

const ICONS = {
  add: IconAdd,
  arrow: IconArrow,
  bold: IconBold,
  close: IconClose,
  cursor: IconCursor,
  delete: IconDelete,
  edit: IconEdit,
  italic: IconItalic,
  disordered: IconListDisordered,
  ordered: IconListOrdered,
  replay: IconReplay,
  underline: IconUnderline,
};

export const Icon: FC<IconProps> = ({
  name,
  fill = COLORS.ACCENT,
  classNames = "",
}) => {
  let CurrentIcon = ICONS[name];
  return <CurrentIcon fill={fill} className={`icon ${classNames}`} />;
};
