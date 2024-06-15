"use client";
import { useState } from "react";
import "./FindItems.css";
import NavLink from "@/Components/Navbar/NavLink";
import Image from "next/image";

function Findtems() {
  const [Find, SetFindtems] = useState([
    "/Partners/breadfast.png",
    "/Partners/clirckle.png",
    "/Partners/goodmart.png",
    "/Partners/mini.png",
    "/Partners/tabbit.png",
    "/Partners/the way to go.png",
    "/Partners/breadfast.png",
    "/Partners/clirckle.png",
    "/Partners/goodmart.png",
    "/Partners/mini.png",
    "/Partners/tabbit.png",
    "/Partners/the way to go.png",
    "/Partners/breadfast.png",
    "/Partners/clirckle.png",
    "/Partners/goodmart.png",
  ]);
  return (
    <div className="FindItems">
      <div className="container">
        <div className="filter-part" data-aos="fade-down">
          <ul>
            <li className="active">
              <Image
                src="/Navbar/scrunches.png"
                width={150}
                height={20}
                alt="scrunches"
              />
            </li>
            <li>
              <Image
                src="/Navbar/wunder.png"
                width={150}
                height={24}
                alt="wunder"
              />
            </li>
            <li>
              <Image
                src="/Navbar/celeste.png"
                width={150}
                height={20}
                alt="celeste"
              />
            </li>
            <li>
              <Image
                src="/Navbar/bake at home.png"
                width={150}
                height={20}
                alt="bake at home"
              />
            </li>
          </ul>
        </div>

        <div className="FindItemsContainer" data-aos="fade-down">
          {Find.map((Rec, index) => (
            <div className="card" key={index}>
              <div className="img-box">
                <Image width={300} height={200} alt="Recipes" src={Rec} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Findtems;
