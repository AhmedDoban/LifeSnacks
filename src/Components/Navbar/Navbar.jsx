"use client";
import React, { useState, useEffect, useRef } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import "./Navbar.css";
import SearchBox from "./SearchBox";
import Link from "next/link";

function Navbar() {
  const Aboutref = useRef();
  const Brandsref = useRef();
  const [AboutActive, SetAboutActive] = useState(false);
  const [BrandsActive, SetBrandsActive] = useState(false);
  const [SearchActive, SetSearchActive] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("click", (e) => {
      if (Aboutref.current !== null) {
        if (e.target !== Aboutref.current) {
          SetAboutActive(false);
        }
      }
      if (Brandsref.current !== null) {
        if (e.target !== Brandsref.current) {
          SetBrandsActive(false);
        }
      }
      return () => {};
    });
  }

  return (
    <div className="Navbar">
      <div className="container">
        <Link className="logo" href="/">
          <Image alt="Logo" src="/Navbar/Logo.png" width={300} height={200} />
        </Link>
        <ul className="navlinks">
          <li>
            <span
              onClick={() => SetAboutActive((prev) => !prev)}
              ref={Aboutref}
            >
              About us
              <i
                className={
                  AboutActive
                    ? "fa-solid fa-arrow-up"
                    : "fa-solid fa-arrow-down"
                }
              ></i>
            </span>
            <div className={`OtherLinks ${AboutActive && "active"}`}>
              <ul className="OtherNavLinkes">
                <li>
                  <NavLink href="/about/Our_Story">Our sroty</NavLink>
                </li>
                <li>
                  <NavLink href="/about/Our_Values">Our values</NavLink>
                </li>
                <li>
                  <NavLink href="/about/Quality">Quality</NavLink>
                </li>
                <li>
                  <NavLink href="/about/sustainability">sustainability</NavLink>
                </li>
                <li>
                  <NavLink href="/about/community">community</NavLink>
                </li>
                <li>
                  <NavLink href="/about/Beyond_Egypt">beyond egypt</NavLink>
                </li>
              </ul>

              <div className="right">
                <Image
                  alt="snaks1"
                  src="/Navbar/About1.png"
                  width={200}
                  height={200}
                />
                <Image
                  alt="snaks2"
                  src="/Navbar/About2.png"
                  width={200}
                  height={200}
                />
                <Image
                  alt="snaks3"
                  src="/Navbar/About3.png"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </li>
          <li>
            <span
              onClick={() => SetBrandsActive((prev) => !prev)}
              ref={Brandsref}
            >
              Our brands
              <i
                className={
                  BrandsActive
                    ? "fa-solid fa-arrow-up"
                    : "fa-solid fa-arrow-down"
                }
              ></i>
            </span>
            <div className={`OtherLinks ${BrandsActive && "active"}`}>
              <div className="OurBrandsContainer">
                <NavLink href="/Our_Brands/scrunch">
                  <div className="box ">
                    <div className="box-image red">
                      <Image
                        alt="snaks1"
                        src="/Navbar/scrunches.png"
                        width={200}
                        height={200}
                      />
                    </div>
                    <p>Scrunch</p>
                  </div>
                </NavLink>

                <NavLink href="/Our_Brands/Wunder">
                  <div className="box ">
                    <div className="box-image yellow">
                      <Image
                        alt="snaks1"
                        src="/Navbar/Wunder.png"
                        width={200}
                        height={200}
                      />
                    </div>

                    <p>Wunder</p>
                  </div>
                </NavLink>

                <NavLink href="/Our_Brands/bake at home">
                  <div className="box">
                    <div className="box-image yellow">
                      <Image
                        alt="snaks1"
                        src="/Navbar/bake at home.png"
                        width={200}
                        height={200}
                      />
                    </div>
                    <p>Bake at home</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink href="/New Arrivals">New Arrivals</NavLink>
          </li>
          <li>
            <NavLink href="/Shop">Shop</NavLink>
          </li>
          <li>
            <NavLink href="/Recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink href="/Find_Us">Find Us</NavLink>
          </li>
          <li>
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => SetSearchActive(true)}
            ></i>
          </li>
        </ul>
        <div className="antions">
          <NavLink href="/Careers">careers</NavLink>
          <NavLink href="/Contact_Us">contact us</NavLink>
        </div>
      </div>
      {SearchActive && <SearchBox SetSearchActive={SetSearchActive} />}
    </div>
  );
}

export default Navbar;
