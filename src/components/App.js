import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Contact from './Contact';

import './styles/App.scss';

import Navigation from './Navigation';
import Footer from './Footer';
import Brand from './Brand';
import About from '../views/About';
import Portfolio from '../views/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Brand />
        <Navigation />
        <Contact />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
