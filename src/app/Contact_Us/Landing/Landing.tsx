import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="ContactUsLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Contact Us</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>Let&apos;s stay in touch!</h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
