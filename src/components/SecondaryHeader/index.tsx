// REACT DEPENDENCIES
import React from "react";

// STYLES DEPENDENCIES
import "./index.scss";
import { useLoadingStatus } from "../../hooks";

type SecondaryHeaderProps = {
  animation: "slide-top";
  children: string;
};

export const SecondaryHeader = ({
  animation,
  children,
}: SecondaryHeaderProps): JSX.Element => {
  const isLoading = useLoadingStatus(200);

  return (
    <h2 className={`secondary-header ${isLoading ? `${animation}` : ""}`}>
      {children}
    </h2>
  );
};
