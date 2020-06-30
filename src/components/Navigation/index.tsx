// REACT DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// STYLES DEPENDENCIES
import "./index.scss";

// POSIBLE IMPOROVEMENTS: CREATE A PROP WITH SECTIONS + MAKE A LIST RENDERING WITH THOSE PROPS

export const Navigation = (): JSX.Element => {
  const [active, toggle] = React.useState(false);

  function handleCheck(): void {
    if (active) {
      toggle(false);
    } else {
      toggle(true);
    }
  }

  return (
    <div className="navigation">
      <input
        checked={active}
        type="checkbox"
        className="navigation__checkbox"
        id="nav_toggle"
        onChange={handleCheck}
      />
      <label htmlFor="nav_toggle" className="navigation__button">
        <div className="navigation__line"></div>
        <div className="navigation__line"></div>
        <div className="navigation__line"></div>
      </label>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link" onClick={handleCheck}>
              <span>About</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/portfolio"
              className="navigation__link"
              onClick={handleCheck}
            >
              <span>Portfolio</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
