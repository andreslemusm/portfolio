import React from 'react';

import Project from './Project';
import './styles/Projects.scss';

import projectsData from '../assets/proyects.js';

// POSIBLE IMPOROVEMENTS: MAP OVER THE PROJECTSDATA (IF I HAVE TO MANY PROJECTS)

export default function Projects() {
  return (
    <div className="portfolio">
      <div className="row">
        <Project className="slide-left" project={projectsData[0]} />
        <Project className="slide-right" project={projectsData[1]} />
      </div>
      <div className="row">
        <Project className="slide-left" project={projectsData[0]} />
        <Project className="slide-right" project={projectsData[1]} />
      </div>
      <div className="row">
        <Project className="slide-left" project={projectsData[0]} />
        <Project className="slide-right" project={projectsData[1]} />
      </div>
      <div className="row">
        <Project className="slide-left" project={projectsData[0]} />
        <Project className="slide-right" project={projectsData[1]} />
      </div>
      <div className="row">
        <Project className="slide-left" project={projectsData[0]} />
        <Project className="slide-right" project={projectsData[1]} />
      </div>
    </div>
  );
}
