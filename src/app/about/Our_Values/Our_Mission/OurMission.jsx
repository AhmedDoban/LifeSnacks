import Image from "next/image";
import "./OurMission.css";

function OurMission() {
  return (
    <div className="OurMission" id="Our_Mission">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <Image
            src="/OurMission.png"
            alt="OurMission"
            width={400}
            height={400}
          />
        </div>
        <div className="right">
          <span data-aos="fade-down">About </span>
          <h1 data-aos="fade-down"> Our Mission</h1>
          <p data-aos="fade-down">
            LifeSnacks is a company, based in Egypt, delivering to you the most
            premium quality ingredients snacks with a home-made authentic taste,
            which meet our customers’ high standards. Our purpose is to be
            convenient for an all day quick & healthy snack saving time and
            boosting energy with a delightful taste.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OurMission;
