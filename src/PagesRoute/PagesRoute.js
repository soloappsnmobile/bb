import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  HomePage,
  About,
  Contact,
  Gallery,
  FourZeroFour,
  Services,
  Team,
  Resources,
  Blog
} from "../pages";

const PagesRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/services" component={Services} />
          <Route path="/team" component={Team} />
          <Route path="/resources" component={Resources} />
          <Route path="/blog" component={Blog}/>
          <Route path="*" component={FourZeroFour} />
        </Switch>
      </Router>
    </div>
  );
};

export default PagesRoute;
