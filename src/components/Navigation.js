import React from 'react';

import './styles/Navigation.scss';

export default function Navigation() {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav_toggle" />
      <label htmlFor="nav_toggle" className="navigation__button">
        <div className="navigation__line"></div>
        <div className="navigation__line"></div>
        <div className="navigation__line"></div>
      </label>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/about" className="navigation__link">
              <span>About</span>
            </a>
          </li>

          <li className="navigation__item">
            <a href="/portfolio" className="navigation__link">
              <span>Portfolio</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
