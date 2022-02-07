import React, { FC } from "react";
import { UserCommentProps } from "./interfaces";
import { ClickableIcon } from "../ClickableIcon";
import { IconTypes } from "../Icon/types";
import { COLORS } from "../../constants/colors";

export const UserComment: FC<UserCommentProps> = ({
  classNames = "",
  children,
  onDeleteClick,
  date = "",
}) => {
  return (
    <div className={`user-comment ${classNames}`}>
      <div className="user-comment_comment-container">{children}</div>
      <div className="user-comment_footer">
        <span className="user-comment_date">{date}</span>
        <ClickableIcon
          onClick={onDeleteClick}
          icon={IconTypes.Delete}
          fill={COLORS.TEXT_DARK_LIGHTEN}
        />
      </div>
    </div>
  );
};
