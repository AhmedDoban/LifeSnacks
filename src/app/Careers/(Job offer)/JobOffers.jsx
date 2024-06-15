"use client";
import { useState } from "react";
import "./JobOffers.css";
import Link from "next/link";

function JobOffers() {
  const [JobOffer, SetJobOffer] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <div className="JobOffers">
      <div className="container">
        <div className="box" data-aos="fade-down">
          <h4>9 current job offers</h4>
          <div className="search-section">
            <div className="input-box">
              <input type="search" name="" id="" placeholder="Search here..." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className="job-container" data-aos="fade-down">
          {JobOffer.map((job, index) => (
            <Link className="job-box" key={index} href={`/Careers/${index}`}>
              <div className="job-status">New</div>
              <div className="job-head">
                <span>Wunder</span>
                <div className="date">
                  <i className="fa-solid fa-calendar"></i>
                  <p>12/6/2024</p>
                </div>
              </div>
              <div className="job-title">
                <h1>Sales Assistant / Salesperson full-time and part-time</h1>
              </div>
              <div className="job-location">
                <i className="fa-solid fa-location-dot"></i>
                <p>Address: Industrial Zone Third Settlement</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default JobOffers;
