import React from 'react';

import './styles/Portfolio.scss';

import SecondaryHeader from '../components/SecondaryHeader';
import SecondarySub from '../components/SecondarySub';
import Projects from '../components/Projects';

export default function Portfolio() {
  return (
    <main>
      <SecondaryHeader className="slide-top" />
      <SecondarySub className="slide-top" />
      <Projects />
    </main>
  );
}
