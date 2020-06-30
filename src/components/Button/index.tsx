// REACT DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// STYLES DEPENDENCIES
import "./index.scss";

type ButtonProps = {
  text: string;
  link: string;
};

export const Button = ({ text, link }: ButtonProps): JSX.Element => {
  return (
    <Link to={link} className="button">
      <button className="button__top">{text}</button>
      <button className="button_bottom">{text}</button>
    </Link>
  );
};
