"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import "./OurValues.css";

function OurValues() {
  const [Values, SetValues] = useState([
    {
      image: "/our values/value1.jpeg",
      image_overlay: "/our values/value1.jpeg",
      text: "Accountability",
      describe:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quod molestias neque voluptatum non possimus, assumenda debitis",
    },
    {
      image: "/our values/value2.jpeg",
      image_overlay: "/our values/value1.jpeg",
      text: "Teamwork",
      describe:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quod molestias neque voluptatum non possimus, assumenda debitis",
    },
    {
      image: "/our values/value3.jpeg",
      image_overlay: "/our values/value1.jpeg",
      text: "Quality",
      describe:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quod molestias neque voluptatum non possimus, assumenda debitis",
    },
    {
      image: "/our values/value4.jpeg",
      image_overlay: "/our values/value1.jpeg",
      text: "Entrepreneurial",
      describe:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quod molestias neque voluptatum non possimus, assumenda debitis",
    },
  ]);
  return (
    <div className="OurValues" id="Our_Values">
      <div className="container">
        <div className="information">
          <div className="left" data-aos="fade-right">
            <span>About</span>
            <h3>Our Values</h3>
          </div>
          <div className="right" data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet consectetur. Commodo in eu semper
              cursus nulla auctor. Malesuada lorem gravida odio sed at potenti
              cras. Velit nunc orci vel adipiscing in arcu vestibulum tristique
              sed. Gravida in parturient nulla cursus ullamcorper et nisl
              porttitor. Tellus lorem libero quis maecenas maecenas in. Elit et
              lorem habitasse faucibus velit ut diam consectetur. Tempor ac
              aenean libero odio non nunc aenean elit sed. In ut bibendum amet
              placerat. In nunc viverra lectus at nisi mi mattis nascetur in.
              Proin tellus
            </p>
          </div>
        </div>
        <div className="images-container">
          {Values.map((value, index) => (
            <div className="value-box" key={index} data-aos="zoom-in">
              <div className="image-actions">
                <div className="image-1">
                  <Image
                    src={value.image}
                    width={400}
                    height={500}
                    alt={value.text}
                  />
                </div>
                <div className="image-2">
                  <Image
                    src={value.image_overlay}
                    width={400}
                    height={500}
                    alt={value.text}
                  />
                </div>
              </div>
              <div className="value-info">
                <h3>{value.text}</h3>
                <p>{value.describe}</p>
                <Link href="/"> Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OurValues;
