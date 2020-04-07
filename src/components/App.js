// REACT DEPENDENCIES
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// STYLES DEPENDENCIES
import './styles/App.scss';

// COMPONENT DEPENDENCIES
import Contact from './Contact';
import Navigation from './Navigation';
import Footer from './Footer';
import Brand from './Brand';

// PAGES DEPENDENCIES
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

// BRAND LOGO
import logo from '../assets/favicon-nav.png';

import resume from '../assets/LEMUSMADRIDac_1152223198_hojaDeVida.pdf';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div id="app">
        <Brand logo={logo} />
        <Navigation />
        <Contact
          linkedinUrl="https://www.linkedin.com/in/andres-camilo-lemus-madrid-a7605a16b/"
          githubUrl="https://github.com/andresclm"
          email="aclmadrid04@gmail.com"
          resumeUrl={resume}
        />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={() => <div>404 Not found </div>} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
