import React from 'react';

import './styles/Button.scss';

import logo from '../assets/favicon.png';

export default function Brand() {
  return (
    <a href="/about" className="brand">
      <picture className="brand__img">
        <source srcSet={logo} media="(min-width: 120em)" />
        <img
          className="brand__img"
          srcSet={logo}
          alt="ACL Technologies Brand"
          width="100"
        />
      </picture>
    </a>
  );
}
