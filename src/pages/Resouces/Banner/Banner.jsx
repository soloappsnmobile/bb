import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner5-container">
      <Navbar />
      <div className="banner-content">
        <h1>Our Resources</h1>
        {/* <p>You can download the Scheme of Learning and our Brochures here.</p> */}
      </div>
    </div>
  );
};

export default Banner;
