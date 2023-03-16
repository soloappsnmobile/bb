import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const RouteWithNavbar = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Navbar />
      <Component extra={rest} />
      <Footer/>
    </Route>
  );
};

export default RouteWithNavbar;
