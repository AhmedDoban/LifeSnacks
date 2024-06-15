import Image from "next/image";
import Link from "next/link";
import "./About.css";

function About({ backgroundColor, BrandName, BrandLogo , AboutImage }) {
  return (
    <div
      className="Our_BrandsAbout"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <Image src={AboutImage} alt="ourStory" width={400} height={300} />
        </div>
        <div className="right">
          <span data-aos="fade-down">About</span>
          <h1 data-aos="fade-down"> {BrandName}</h1>
          <p data-aos="fade-down">
            Lorem ipsum dolor sit amet consectetur. Cursus et pretium tortor
            semper elit sed. Felis odio adipiscing vel cursus tortor diam
            cursus. Et enim sed augue feugiat nunc quis. Lectus posuere elit nec
            mauris nisl. Egestas neque mauris nisl laoreet bibendum facilisis
            pulvinar nam nulla. Amet in neque neque malesuada amet in. Magna
            nulla turpis in molestie. Enim purus sit neque aenean lacus etiam
            sed.
          </p>
          <Image src={BrandLogo} alt={BrandName} width={100} height={50} />
        </div>
      </div>
    </div>
  );
}
export default About;
