import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="CareersLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Careers</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            Take the first step – if we
            <br /> have a suitable position,
            <br />
            we will contact you.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
