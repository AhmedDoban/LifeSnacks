"use client";
import { useState } from "react";
import "./ReciepsItems.css";
import NavLink from "@/Components/Navbar/NavLink";
import Image from "next/image";

function ReciepesItems() {
  const [Recipes, SetReciepes] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  return (
    <div className="ReciepsItems">
      <div className="container">
        <h1 data-aos="fade-down">Recipes</h1>
        <div className="ReciepsItemsContainer" data-aos="fade-down"> 
          {Recipes.map((Rec, index) => (
            <div className="card" key={index}>
              <div className="img-box">
                <Image
                  width={300}
                  height={200}
                  alt="Recipes"
                  src="/Recipes.jpeg"
                />
                <i className="fa-solid fa-play PlayVideo"></i>
              </div>
              <span>By Crumbli</span>
              <p>Chocolate donuts</p>
              <div className="timing">
                <div className="box">
                  <i className="fa-solid fa-clock"></i>
                  <span>Prep:</span>
                  <span>:40m</span>
                </div>
                <div className="box">
                  <i className="fa-solid fa-cookie-bite"></i>
                  <span>cook::</span>
                  <span>20m</span>
                </div>
              </div>
              <NavLink href={`/Recipes/${index}`}>Watch Video</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ReciepesItems;
