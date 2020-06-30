// REACT DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// STYLES DEPENDENCIES
import "./index.scss";

type BrandProps = {
  logo: string;
};

export const Brand = ({ logo }: BrandProps): JSX.Element => (
  <Link to="/" className="brand">
    <picture className="brand__img">
      <img className="brand__img" srcSet={logo} alt="ACL Technologies Logo" />
    </picture>
  </Link>
);
