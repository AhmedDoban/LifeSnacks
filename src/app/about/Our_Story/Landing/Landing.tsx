import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="Our_StoryLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>About us</span>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Our Story</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            the story behindthe
            <br />
            name Lifesnacks it’s a
            <br />
            community, a movement
            <br />
            and a state of mind.
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
