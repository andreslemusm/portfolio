// REACT DEPENDENCIES
import React from 'react';

// STYLES DEPENDENCIES
import './styles/About.scss';

// COMPONENT DEPENDENCIES
import PrimaryHeader from '../components/PrimaryHeader';
import Button from '../components/Button';
import PrimaySub from '../components/PrimarySub';

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 200);
  }

  render() {
    return (
      <main className={`about${this.state.loading ? ' rotate' : ''}`}>
        <PrimaryHeader firstLine="I'm" secondLine="Andres Lemus" />
        <PrimaySub>
          A Front End developer currently based in Medellin, Colombia.
        </PrimaySub>
        <PrimaySub>Hit me up and let&apos;s create something special</PrimaySub>
        <Button link="/portfolio" text="View Projects" />
      </main>
    );
  }
}
