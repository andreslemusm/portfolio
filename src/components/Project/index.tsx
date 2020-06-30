// REACT DEPENDENCIES
import React from "react";

// ICONS DEPENDENCIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes, faCode } from "@fortawesome/free-solid-svg-icons";

// STYLES DEPENDENCIES
import "./index.scss";
import { IProject } from "../../pages/Portfolio/assets/projectsData";
import { useLoadingStatus } from "../../hooks";

type ProjectProps = {
  projectData: IProject;
  animation: "slide-right" | "slide-left";
};

export const Project = ({
  animation,
  projectData,
}: ProjectProps): JSX.Element => {
  const isLoading = useLoadingStatus(400);
  const [selected, toggleSelected] = React.useState(false);

  function handleClick(): void {
    if (selected) {
      toggleSelected(false);
    } else {
      toggleSelected(true);
    }
  }

  return (
    <div className={`col-1-of-2 project ${isLoading ? `${animation}` : ""}`}>
      <div className="project__item">
        <img className="project__img" src={projectData.img} alt="Project" />
        <div className="project__overlay">
          <div className="project__buttons">
            <button
              type="button"
              className="project__button"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faEye} /> View Project
            </button>
          </div>
        </div>
      </div>

      <div
        className={`project__background ${
          selected && "project__background--show"
        }`}
      >
        <div className={`project__modal ${selected && "project__modal--show"}`}>
          <button className="project__close" onClick={handleClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <div className="project__left">
            <img
              className="project__img--modal"
              src={projectData.img}
              alt="Project"
              width="500"
              height="300"
            />
          </div>
          <div className="project__right">
            <div className="project__label">Project</div>
            <h3 className="project__name">{projectData.name}</h3>
            <ul className="project__technologies">
              {projectData.technologies.map((tech) => {
                return (
                  <li className="project__technology" key={tech}>
                    {tech}
                  </li>
                );
              })}
            </ul>
            <div className="project__label">About</div>
            <p className="project__summary">{projectData.about}</p>
            <a
              href={projectData.demoUrl}
              className="project__button project__button--modal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEye} /> Demo
            </a>
            <a
              href={projectData.codeUrl}
              className="project__button project__button--modal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCode} /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
