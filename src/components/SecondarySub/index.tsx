// REACT DEPENDENCIES
import React from "react";

// STYLES DEPENDENCIES
import "./index.scss";
import { useLoadingStatus } from "../../hooks";

// NEW ANIMATION:
//  1. Make one in Portfolio.scss
//  2. Pass a prop with name preceed by ' ' (ex: ' slide-right')

type SecondarySubProps = {
  animation: string;
  children: string;
};

export const SecondarySub = ({
  animation,
  children,
}: SecondarySubProps): JSX.Element => {
  const isLoading = useLoadingStatus(200);
  return (
    <sub className={`secondary-sub${isLoading ? ` ${animation}` : ""}`}>
      {children}
    </sub>
  );
};
