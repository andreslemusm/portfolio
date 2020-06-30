// REACT DEPENDENCIES
import React from "react";

// ICONS DEPENDENCIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons/";

// STYLES DEPENDENCIES
import "./index.scss";

type ContactProps = {
  linkedInUser: string;
  gitHubUser: string;
  email: string;
  resumeUrl: string;
};

export const Contact = ({
  linkedInUser,
  gitHubUser,
  email,
  resumeUrl,
}: ContactProps): JSX.Element => {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__item">
          <a
            href={`https://www.linkedin.com/in/${linkedInUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--linkedin"
          >
            <span className="contact__label">Linkedin</span>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href={`https://github.com/${gitHubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--github"
          >
            <span className="contact__label">Github</span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--email"
          >
            <span className="contact__label">Email</span>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>

        <li className="contact__item">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link contact__link--resume"
            download
          >
            <span className="contact__label">Resume</span>
            <FontAwesomeIcon icon={faPortrait} />
          </a>
        </li>
      </ul>
    </div>
  );
};
