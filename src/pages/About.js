import React from 'react';

import './styles/About.scss';

import PrimaryHeader from '../components/PrimaryHeader';
import Button from '../components/Button';
import PrimaySub from '../components/PrimarySub';

export default function About() {
  return (
    <main className="about">
      <PrimaryHeader firstLine="Andres" secondLine="Lemus" />
      <PrimaySub />
      <Button link="/portfolio" text="View Projects" />
    </main>
  );
}
