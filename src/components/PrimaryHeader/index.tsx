// REACT DEPENDENCIES
import React from "react";

// STYLES DEPENDENCIES
import "./index.scss";

type PrimaryHeaderProps = {
  firstLine: string;
  secondLine: string;
};
export const PrimaryHeader = ({
  firstLine,
  secondLine,
}: PrimaryHeaderProps): JSX.Element => (
  <h1 className="primary-header">
    <span>{firstLine} </span>
    <span>{secondLine}</span>
  </h1>
);
