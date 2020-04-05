import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons/';

import './styles/Contact.scss';

export default function Contact() {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__item">
          <a
            href="https://www.linkedin.com/in/andres-camilo-lemus-madrid-a7605a16b/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--linkedin">
            <span className="contact__label">Linkedin</span>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href="https://github.com/andresclm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--github">
            <span className="contact__label">Github</span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href="mailto:aclmadrid04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--email">
            <span className="contact__label">Email</span>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href="https://drive.google.com/file/d/15W5tKjcJFKqmjEIYZxDX13dn2WDl8kgh/view"
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
