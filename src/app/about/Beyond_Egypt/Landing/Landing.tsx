import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="Beyond_EgyptLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>About us</span>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Beyond Egypt</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            Lifesnacks Beyond
            <br />
            Egypt to international
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
