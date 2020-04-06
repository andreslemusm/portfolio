// REACT DEPENDENCIES
import React from 'react';

// STYLE DEPENDENCIES: This is the place to create animations
import './styles/Portfolio.scss';

// COMPONENT DEPENDENCIES
import SecondaryHeader from '../components/SecondaryHeader';
import SecondarySub from '../components/SecondarySub';
import Projects from '../components/Projects';

// DATA DEPENDENCIES
import projectsData from '../assets/proyects.js';

export default function Portfolio() {
  return (
    <main>
      <SecondaryHeader animation=" slide-top">Portfolio</SecondaryHeader>
      <SecondarySub animation=" slide-top">
        These are my favorite projects I&apos;ve worked on for the past year.
        Have a look around and make sure to hit me up!
      </SecondarySub>
      <Projects projectsData={projectsData} />
    </main>
  );
}
