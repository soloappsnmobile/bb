import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import SweetAlert from "react-bootstrap-sweetalert";

const Contact = () => {
  const [show, setShow] = useState(false);

  const showAlert = () => {
    setShow(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0j74rrj",
        "template_sh1y3e9",
        e.target,
        "user_FyfwUVBJXVXD4b3OfdDqy"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showAlert();
  };

  return (
    <div>
      <div className="container mt-5 map-container mb-5">
        <div className="row text-center ">
          <div className="col-3"></div>
          <div className="col-6 team-container">
            <p>We are just moments away. Send us a message</p>
          </div>
          <div className="col-3"></div>
          <div className="team">
            <p>We are just moments away. Send us a message</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div class="cardii">
              <i class="fas fa-map-marker-alt"></i>
              <h2 class="card-title">Location</h2>
              <p class="card-info">Apenkwa - Achimota</p>
            </div>

            <div class="cardii">
              <i class="fas fa-phone"></i>
              <h2 class="card-title">Phone number</h2>
              <p class="card-info">+233 249 2730 49</p>
            </div>

            <div class="cardii">
              <i class="fas fa-envelope"></i>
              <h2 class="card-title">Email</h2>
              <p class="card-info">bbexaminerss@gmail.com</p>
            </div>
          </div>
          <div className="col-md-8">
            <div class="form-container">
              <form onSubmit={sendEmail}>
                <ul>
                  <li>
                    <label for="name">
                      <span>
                        Name <span class="required-star">*</span>
                      </span>
                    </label>
                    <input type="text" id="name" name="name" required />
                  </li>
                  <li>
                    <label for="mail">
                      <span>
                        Email <span class="required-star">*</span>
                      </span>
                    </label>
                    <input type="email" id="mail" name="user_email" required />
                  </li>
                  <li>
                    <label for="msg">
                      <span>Message</span>
                    </label>
                    <textarea name="message" rows="4" cols="50"></textarea>
                  </li>
                  <li>
                    <input type="submit" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Show alert */}
            {show && (
              <SweetAlert
                success
                title="Message Sent!"
                onConfirm={() => setShow(false)}
              >
                Thank You for your message. We will get back to you as soon as we can.
              </SweetAlert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;