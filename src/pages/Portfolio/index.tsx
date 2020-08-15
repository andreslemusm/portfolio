// REACT DEPENDENCIES
import React from "react";

// STYLE DEPENDENCIES: This is the place to create animations
import "./index.scss";

// COMPONENT DEPENDENCIES
import { SecondaryHeader } from "../../components/SecondaryHeader";
import { SecondarySub } from "../../components/SecondarySub";
import { Project } from "../../components/Project";
// DATA DEPENDENCIES
import { projectsData } from "./assets/projectsData";

export const Portfolio = (): JSX.Element => (
  <main>
    <SecondaryHeader animation="slide-top">Portfolio</SecondaryHeader>
    <SecondarySub animation="slide-top">
      These are my favorite projects I&apos;ve worked on for the past year, you
      can see what I&apos;m currently working on in my GitHub.
    </SecondarySub>
    <div className="portfolio">
      <div className="row">
        <Project animation="slide-left" projectData={projectsData[0]} />
        <Project animation="slide-right" projectData={projectsData[1]} />
      </div>
    </div>
  </main>
);
