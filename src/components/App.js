import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Contact from './Contact';

import Navigation from './Navigation';
import Footer from './Footer';
import Button from './Button';
import Brand from './Brand';

function App() {
  return (
    <React.Fragment>
      <Brand />
      <Contact />
      <Navigation />
      <Button />
      <Footer />
    </React.Fragment>
  );
}

export default App;
