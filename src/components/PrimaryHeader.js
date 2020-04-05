// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// STYLES DEPENDENCIES
import './styles/PrimaryHeader.scss';

export default function PrimaryHeader(props) {
  return (
    <h1 className="primary-header">
      <span>{props.firstLine} </span>
      <span>{props.secondLine}</span>
    </h1>
  );
}

PrimaryHeader.propTypes = {
  firstLine: PropTypes.string.isRequired,
  secondLine: PropTypes.string.isRequired,
};
