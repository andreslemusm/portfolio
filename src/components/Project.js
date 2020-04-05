import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes, faCode } from '@fortawesome/free-solid-svg-icons';

import './styles/Project.scss';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }

  render() {
    return (
      <div className="col-1-of-2 project">
        <div className="project__item">
          <img
            className="project__img"
            src={this.props.project.img}
            alt="Project"
            width="300"
          />
          <div className="project__overlay">
            <div className="project__buttons">
              <button
                type="button"
                href="/h"
                className="project__button"
                onClick={this.handleClick}>
                <FontAwesomeIcon icon={faEye} /> View Project
              </button>
            </div>
          </div>
        </div>

        <div
          className={`project__background ${
            this.state.selected && 'project__background--show'
          }`}>
          <div
            className={`project__modal ${
              this.state.selected && 'project__modal--show'
            }`}>
            <button className="project__close" onClick={this.handleClick}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="project__left">
              <img
                className="project__img--modal"
                src={this.props.project.img}
                alt="Project"
                width="500"
                height="300"
              />
            </div>
            <div className="project__right">
              <div className="project__label">Project</div>
              <h3 className="project__name">{this.props.project.name}</h3>
              <ul className="project__technologies">
                {this.props.project.technologies.map((tech) => {
                  return (
                    <li className="project__technology" key={tech}>
                      {tech}
                    </li>
                  );
                })}
              </ul>
              <div className="project__label">About</div>
              <p className="project__summary">{this.props.project.about}</p>
              <a
                href={this.props.project.demoUrl}
                className="project__button project__button--modal"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEye} /> Demo
              </a>
              <a
                href={this.props.project.codeUrl}
                className="project__button project__button--modal"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCode} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
