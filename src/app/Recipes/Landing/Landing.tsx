import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="ReciepesLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Reciepes</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            Discover recipes
            <br /> made with our <br />
            brands
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Landing;
