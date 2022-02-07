import React, { FC } from "react";
import { ContentContainerProps } from "./interfaces";
import { Button } from "../Button";
import { IconTypes } from "../Icon/types";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";

export const ContentContainer: FC<ContentContainerProps> = ({
  children,
  title,
  error = "",
  loading = false,
  onButtonClick,
  buttonTitle,
  buttonIcon,
  classNames = "",
  backButtonLink = "",
}) => {
  return (
    <div className={`content-container ${classNames}`}>
      {backButtonLink && (
        <Link
          to={backButtonLink}
          children={
            <Icon
              name={IconTypes.Arrow}
              classNames="content-container_back-button"
            />
          }
        />
      )}
      <div className="content-container_title-container">
        <h1 className="content-container_title">{title}</h1>
        <Button
          onClick={onButtonClick}
          classNames="content-container_add-note-button"
          title={buttonTitle}
          icon={buttonIcon}
        />
      </div>
      {loading && <span>Загрузка...</span>}
      {error && <span>{error}</span>}
      {children}
    </div>
  );
};
