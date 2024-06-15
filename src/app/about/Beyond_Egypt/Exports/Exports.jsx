"use client";
import { useState } from "react";
import "./Exports.css";
import Image from "next/image";

function Exports() {
  const [Countries, SetCountries] = useState([
    {
      name: "Lebanon",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc cursus duis libero id enim a urna. Porttitor vivamus mauris tempus est suspendisse ultrices.",
      logo: "/Lebanon.png",
      location: "/LebanonLocation.png",
    },
    {
      name: "Jordan",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc cursus duis libero id enim a urna. Porttitor vivamus mauris tempus est suspendisse ultrices.",
      logo: "/Jordan.png",
      location: "/JordanLocation.png",
    },
  ]);
  return (
    <div className="Beyond_EgyptExports">
      <div className="container">
        <div className="info" data-aos="fade-down">
          <h4>
            We are exports to Lebanon,
            <br />
            Jordan countries
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur. Commodo in </p>
        </div>
        <div className="Exports-country">
          {Countries.map((Countriy) => (
            <div
              className="box"
              key={Countriy.name}
              style={{ backgroundImage: `url(${Countriy.location})` }}
              data-aos="zoom-in"
            >
              <div className="information">
                <div className="headInfo">
                  <Image
                    src={Countriy.logo}
                    width={50}
                    height={30}
                    alt={Countriy.name}
                  />
                  <h5>{Countriy.name}</h5>
                </div>
                <p>{Countriy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Exports;
