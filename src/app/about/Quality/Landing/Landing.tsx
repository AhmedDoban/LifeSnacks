import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="QualityLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>About us</span>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Quality</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            Discover the origin
            <br />
            of our cacao and
            <br />
            how our chocolate is
            <br />
            created
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
