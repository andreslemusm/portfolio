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
        I&apos;m currently working on amazing projects to show you. Be sure to
        check my github to see how much progress I have.
      </SecondarySub>
      <Projects projectsData={projectsData} />
    </main>
  );
}
