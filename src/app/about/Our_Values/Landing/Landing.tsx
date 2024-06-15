import React from "react";
import "./Landing.css";
import NavLink from "@/Components/Navbar/NavLink";

function Landing() {
  return (
    <div className="Our_ValuesLanding">
      <div className="container">
        <div className="navigation-info">
          <NavLink href="/">Home</NavLink>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>About us</span>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>Our Values</span>
        </div>
        <div className="box-info" data-aos="fade-up">
          <h1>
            it&apos;s not only the
            <br />
            results that define a
            <br />
            business, but also
            <br />
            the people.
          </h1>
          <div className="actions">
            <a href="#Our_Values">Our Values</a>
            <a href="#Our_Mission">Our Mission</a>
            <a href="#Our_Vision">Our Vision</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
