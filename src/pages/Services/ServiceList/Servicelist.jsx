import React from "react";
import "./Servicelist.css";
const Servicelist = () => {
  return (
    <div class="feat bg-gray pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="section-head col-sm-12">
            <h4>
              <span>Our</span> Services
            </h4>
            <p>
              Our attention to the small stuff, scheduling of timelines and keen
              project management that makes us stand out from the rest.
              <br />
            </p>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <span class="icon feature_box_col_one">
                <i class="fa fa-globe"></i>
              </span>
              <h6>General Assessment</h6>
              <p>
                We provide Graded Special Mock Examination for B.E.CE Candidates
                on monthly basis and Special Mid - Semester/Term and End of
                Semester/Term Examinations for Pre -School and Basic Schools.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <span class="icon feature_box_col_two">
                <i class="fa fa-anchor"></i>
              </span>
              <h6>Research & Educational Publications</h6>
              <p>
                We provide In-service training for teachers, Curriculum Development And
                Training. We also do mass printing <span>e.t.c.</span> to schools
                and the public.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="item">
              <span class="icon feature_box_col_three">
                <i class="fa fa-hourglass-half"></i>
              </span>
              <h6>Academic Excellence Awards</h6>
              <p>
                We again provide Special-Competitive-Excellence awards for
                schools, teachers and pupils at district, regional and national
                level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicelist;
