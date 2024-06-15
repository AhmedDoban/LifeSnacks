import Image from "next/image";
import "./AboutSustainability.css";

function AboutSustainability() {
  return (
    <div className="AboutSustainability">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <Image
            src="/AboutSustainability.jpg"
            alt="AboutSustainability"
            width={300}
            height={300}
          />
        </div>
        <div className="right">
          <span data-aos="fade-down">Sustainability </span>
          <h1 data-aos="fade-down"> How it all started</h1>
          <p data-aos="fade-down">
            The whole story goes back to an Egyptian family who couldn’t find a
            fresh healthy snack with high quality and nutrients. So, they
            started crafting their own at their home kitchen. They’ve tried many
            ingredients until they settled on one with several flavors. Their
            story went viral between their friends, they started delivering
            orders per requests and this turned to a business, bought their own
            factory and created LIFE SNACKS!
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSustainability;
