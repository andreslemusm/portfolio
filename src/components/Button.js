import React from 'react';

import './styles/Button.scss';

export default function Button() {
  return (
    <a href="/portfolio" className="button">
      <button className="button__top">VIEW PROJECTS</button>
      <button className="button_bottom">VIEW PROJECTS</button>
    </a>
  );
}
