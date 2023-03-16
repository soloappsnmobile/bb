import "./Footer.css";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section class="contact-area" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo-image" />
                </Link>
                <p>
                  We have well-motivated professionals to give you your money's
                  worth. Also, We are always in touch with you through any means
                  of communication available to us. Only the best is good enough
                  for you.
                </p>
                <div class="hr"></div>
                <h6>
                  Achimota - Apenkwa, near the Apenkwa Presbyterian Church
                </h6>
                <h6>
                  +233 240 0000 00<span>|</span>+233 200 0000 00
                </h6>
                <div class="contact-social">
                  <ul>
                    <li>
                      <a
                        class="hover-target"
                        href="https://web.facebook.com/bestbrain.examinationskonsortium.77"
                        target="blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        class="hover-target"
                        href="https://www.instagram.com/bestbrainghana/"
                        target="blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        class="hover-target"
                        href="https://twitter.com/bestbrainghana"
                        target="blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <form action="#" method="post" className="form">
                  <label for="email">Subscribe to our Newsletter:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
