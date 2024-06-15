import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="sustainabilityLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>About us</span>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Sustainability</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            Sustainability is a part
            <br />
            of everything we do
            <br />
            at Lifesnacks
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
