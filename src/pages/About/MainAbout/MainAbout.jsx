import React from "react";
import "./Mainabout.css";

const MainAbout = () => {
  return (
    <div className="mt-5">
      <div className="section-head col-sm-12">
        <h4>
          <span>More About</span> Us
        </h4>
        <p>Our knowledge is your knowledge. Our network is your network.</p>
      </div>

      <div id="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6">
              <div className="about-content">
                <b className="bolder">Press Consultancy</b> is a
                 consultancy which is one of a kind in branding and
                reputation. Since 2004, our name has been associated with the
                most prestigiuos companies in Ghana. Thousands of
                dynamic and ambitious private and public schools nationwide have
                benefitted from our value - laden services. 
              </div>
            </div>

            <div className="col-md-6 mt-3 skills-bar">
              <p>Quality Service</p>
              <div className="progress">
                <div className="progress-bar">100%</div>
              </div>
              <p>Standard Service</p>
              <div className="progress">
                <div className="progress-bar">100%</div>
              </div>
              <p>Seasoned Consultants</p>
              <div className="progress">
                <div className="progress-bar">100%</div>
              </div>
              <p>24/7 Support</p>
              <div className="progress">
                <div className="progress-bar">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
