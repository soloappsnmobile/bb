import React from "react";
import banner from "../../../../assets/images/banner.jpg";
import video from "../../../../assets/images/video.mp4";
import brochure from "../../../../assets/images/Brochure-1.png";
import brochure2 from "../../../../assets/images/Brochure-2.png";

import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <>
      <div className="container why-container mt-5 mb-5">
        <div className="row mt-5 mb-5 d-flex align-items-center">
          <div className="col-md-6 order-2 order-md-1 why-us-left">
            <p>
              Best Brain Examinations Konsortium (BBEKO) is an educational
              consultancy which is one of a kind in branding and reputation.
              Since 2004, our name has been associated with the most prestigiuos
              examinations for schools in Ghana.
            </p>
            {/* <button className="button shadow-lg">Explore</button> */}
          </div>
          <div className="col-md-6 why-us order-1 order-md-2">
            <h1>Why Choose Us For Your Upcoming Examinations</h1>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 why-us">
            {/* <img src={whyus} alt="" className="img-fluid why-us-img" /> */}
            <img src={banner} alt="" className="img-fluid" />
          </div>

          <div className="col-md-6 p-5">
            <div className="why-points d-flex flex-column justify-content-evenly">
              <div className="row d-flex mt-5 align-items-center">
                <div className="col-3 numbering">
                  <div className="design4" />
                  <h1>01</h1>
                </div>
                <div className="col-9 why-description">
                  <p>
                    We care for every candidate in every school and so inspire
                    you with the greatest confidence for all-round success.
                  </p>
                </div>
              </div>

              <div className="row d-flex mt-5 align-items-center">
                <div className="col-3 numbering">
                  <div className="design5" />
                  <h1>02</h1>
                </div>
                <div className="col-9 why-description">
                  <p>
                    Our special package has always proven to be highly
                    comprehensive, appropriately diagnostic, and effectively
                    therapeutic.
                  </p>
                </div>
              </div>

              <div className="row d-flex mt-5 align-items-center">
                <div className="col-3 numbering">
                  <div className="design6" />
                  <h1>03</h1>
                </div>
                <div className="col-9 why-description">
                  <p>
                    Our printing is of the best quality on high density papers
                    using the best technology. We also bite what we can chew by
                    admitting only serious schools
                  </p>
                </div>
              </div>

              <div className="row d-flex mt-5 align-items-center">
                {/* <div className="col-3 numbering">
                  <div className="design7" />
                  <h1>04</h1>
                </div> */}
                <div className="col-12 why-description">
                  <video
                    src={video}
                    className="video"
                    controls="controls"
                    autoplay="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div class="section-head col-sm-12">
          <h4>
            <span>Our</span> Brochure
          </h4>
          {/* <p>
            Our attention to the small stuff, scheduling of timelines and keen
            project management that makes us stand out from the rest.
            <br />
          </p> */}
        </div>
        <img src={brochure} alt="" className="img-fluid brochure" />
        <img src={brochure2} alt="" className="img-fluid brochure" />

      </div>
    </>
  );
};

export default WhyChooseUs;
