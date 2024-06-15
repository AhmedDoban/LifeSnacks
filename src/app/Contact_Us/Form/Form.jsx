import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="Form">
      <div className="container">
        <div className="left">
          <div className="Get-touch">
            <h3>Get In Touch</h3>
            <p>Visit us or call us or send us at mail.</p>
            <div className="actions">
              <a className="contact-box">
                <i className="fa-solid fa-location-dot"></i>
                <p>Address: Factory #313 Industrial ZoneThird Settlement,</p>
              </a>
              <a className="contact-box">
                <i className="fa-solid fa-phone"></i>
                <p>(+20) 102 010-0045</p>
              </a>
              <a className="contact-box">
                <i className="fa-solid fa-envelope"></i>
                <p>customercare@lifesnacks.me</p>
              </a>
            </div>
          </div>
          <div className="Social-box">
            <h3> Social Media</h3>
            <p>Follow us on social media platforms.</p>
            <div className="social-media-box">
              <div className="social">
                <h3>Scrunch</h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="social">
                <h3>Celests</h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="social">
                <h3>Wunder</h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="social">
                <h3> Bake At Home </h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Please fill in the form and submit your request</h1>
          <div className="form-box">
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="tel" name="" id="" placeholder="Mobile number" />
            <textarea placeholder="Your message"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
