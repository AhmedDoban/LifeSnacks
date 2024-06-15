import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="communityLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>About us</span>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Community</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            Lifesnacks to our
            <br />
            communities
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
