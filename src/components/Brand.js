import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Brand.scss';

import logo from '../assets/favicon-nav.png';

export default function Brand() {
  return (
    <Link to="/about" className="brand">
      <picture className="brand__img">
        {/* <source srcSet={logoSM} media="(min-width: 120em)" /> */}
        <img
          className="brand__img"
          srcSet={logo}
          alt="ACL Technologies Brand"
        />
      </picture>
    </Link>
  );
}
