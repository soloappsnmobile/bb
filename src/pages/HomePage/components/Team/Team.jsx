import "./Team.css";
import boss from "../../../../assets/images/boss.jpeg";
import adika from "../../../../assets/images/adika.jpeg";
import francis from "../../../../assets/images/francis.jpeg";
import mawuli from "../../../../assets/images/mawuli.jpeg";

const Team = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <div className="col-3"></div>
        <div className="col-6 team-container">
          <div class="section-head col-sm-12">
            <h4>
              <span>Meet The</span> Team
            </h4>
            <p>
              We’re driven by the idea that the best work is born from
              diligence, craftsmanship and fun.
            </p>
          </div>
        </div>
        <div className="col-3"></div>
        <div className="team">
          <p>
            We’re driven by the idea that the best work is born from diligence,
            craftsmanship and fun.
          </p>
        </div>
      </div>

      {/* Carousel Row */}

      <div className="row mt-5">
        <ul class="list-members">
          <li class="member">
            <div class="member-image">
              <img src={boss} alt="pic" />
            </div>
            <div class="member-info">
              <h3>Bacon Atsu Amengor</h3>
              <p>Founder & CEO</p>
              <div class="social-link">
                <a
                  href="https://web.facebook.com/bacon.amengor.5"
                  target="blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/in/bacon-atsu-amengor-a33b9450/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </li>
          <li class="member">
            <div class="member-image">
              <img src={francis} alt="pic" />
            </div>
            <div class="member-info">
              <h3>Francis Vinyo</h3>
              <p>Deputy Director</p>
              <div class="social-link">
                <a href="https://web.facebook.com/vinyo.francis">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </li>
          <li class="member">
            <div class="member-image">
              <img src={adika} alt="pic" />
            </div>
            <div class="member-info">
              <h3>Adika Fernand</h3>
              <p>General Manager</p>
              <div class="social-link">
                <a
                  href="https://web.facebook.com/fernand.adika.10"
                  target="blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </li>
          <li class="member">
            <div class="member-image">
              <img src={mawuli} alt="pic" />
            </div>
            <div class="member-info">
              <h3>Vincent Amengor</h3>
              <p>Marketing Manager</p>
              <div class="social-link">
                <a
                  href="https://web.facebook.com/amengor.vincent"
                  target="blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
        {/* <div className="view-all text-end">
          <Link to='/team'>
            <p>View All<i class="fas fa-arrow-right"></i></p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Team;
