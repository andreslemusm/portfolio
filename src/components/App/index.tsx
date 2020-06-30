// REACT DEPENDENCIES
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// STYLES DEPENDENCIES
import "./index.scss";

// COMPONENT DEPENDENCIES
import { Contact } from "../Contact";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { Brand } from "../Brand";

// PAGES DEPENDENCIES
import { About } from "../../pages/About";
import { Portfolio } from "../../pages/Portfolio";

// BRAND LOGO
import logo from "./assets/brandLogo.png";

export const App = (): JSX.Element => {
  return (
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div id="app">
          <Brand logo={logo} />
          <Navigation />
          <Contact
            linkedInUser="andresclm"
            gitHubUser="andresclm"
            email="aclmadrid04@gmail.com"
            resumeUrl={require("./assets/LEMUSMADRIDac_CV.pdf")}
          />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};
