import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import './Banner.css';


const Banner = () => {
  return (
    <div className="banner-container">
      <Navbar />
      <div className="banner-content">
        <h1>Our Blog</h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          optio dolorem animi vero unde nisi adipisci consequuntur!
        </p> */}
      </div>
    </div>
  );
};

export default Banner;
