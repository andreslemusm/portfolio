// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// STYLES DEPENDENCIES
import './styles/Brand.scss';

export default function Brand(props) {
  return (
    <Link to="/about" className="brand">
      <picture className="brand__img">
        <img
          className="brand__img"
          srcSet={props.logo}
          alt="ACL Technologies Brand"
        />
      </picture>
    </Link>
  );
}

Brand.propTypes = {
  logo: PropTypes.string.isRequired,
};
