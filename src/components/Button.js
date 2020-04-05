// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// STYLES DEPENDENCIES
import './styles/Button.scss';

export default function Button(props) {
  return (
    <Link to={props.link} className="button">
      <button className="button__top">{props.text}</button>
      <button className="button_bottom">{props.text}</button>
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
