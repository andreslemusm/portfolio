// REACT DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';

// STYLES DEPENDENCIES
import './styles/Navigation.scss';

// POSIBLE IMPOROVEMENTS: CREATE A PROP WITH SECTIONS + MAKE A LIST RENDERING WITH THOSE PROPS
export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck() {
    if (!this.state.active) {
      this.setState({
        active: true,
      });
    } else {
      this.setState({
        active: false,
      });
    }
  }
  render() {
    return (
      <div className="navigation">
        <input
          checked={this.state.active}
          type="checkbox"
          className="navigation__checkbox"
          id="nav_toggle"
          onChange={this.handleCheck}
        />
        <label htmlFor="nav_toggle" className="navigation__button">
          <div className="navigation__line"></div>
          <div className="navigation__line"></div>
          <div className="navigation__line"></div>
        </label>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                to="/about"
                className="navigation__link"
                onClick={this.handleCheck}>
                <span>About</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                to="/portfolio"
                className="navigation__link"
                onClick={this.handleCheck}>
                <span>Portfolio</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
