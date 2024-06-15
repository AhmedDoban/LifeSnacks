import Image from "next/image";
import "./OurVision.css";

function OurVision() {
  return (
    <div className="OurVision" id="Our_Vision">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <Image
            src="/OurVision.png"
            alt="OurVision"
            width={400}
            height={400}
          />
        </div>
        <div className="right">
          <span data-aos="fade-down">About </span>
          <h1 data-aos="fade-down"> Our Vision</h1>
          <p data-aos="fade-down">
            Lorem ipsum dolor sit amet consectetur. Nisi ac convallis nisi
            egestas. At tincidunt laoreet morbi iaculis enim a volutpat
            pharetra. Eu tincidunt ornare lectus nullam urna sit fermentum. Et
            purus quis malesuada luctus. Cursus odio molestie integer facilisis
            mauris. Velit morbi tortor condimentum eu nulla mus malesuada
            malesuada elementum. Nullam commodo gravida elementum amet lacus
            diam at vel ipsum. Fermentum tincidunt nisi eleifend tortor lorem
            neque in. Sed massa in imperdiet fames.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OurVision;
