// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';

// ICONS DEPENDENCIES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons/';

// STYLES DEPENDENCIES
import './styles/Contact.scss';

// POSIBLE IMPROVEMENTS: BEING ABLE TO CREATE WATHEVER LINK I WANT
// Facebook, Instagram, Codewars, etc.
export default function Contact(props) {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__item">
          <a
            href={props.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--linkedin">
            <span className="contact__label">Linkedin</span>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href={props.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--github">
            <span className="contact__label">Github</span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href={`mailto:${props.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--email">
            <span className="contact__label">Email</span>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href={props.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--resume">
            <span className="contact__label">Resume</span>
            <FontAwesomeIcon icon={faPortrait} />
          </a>
        </li>
      </ul>
    </div>
  );
}

Contact.propTypes = {
  linkedinUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  resumeUrl: PropTypes.string.isRequired,
};
