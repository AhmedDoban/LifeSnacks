import Image from "next/image";
import "./Tasting.css";

function Tasting() {
  return (
    <div className="Tasting">
      <div className="container">
        <div className="left">
          <div className="box">
            <span data-aos="fade-down">About</span>
            <h1 data-aos="fade-down">Tasting Guide</h1>
            <p data-aos="fade-down">
              Lorem ipsum dolor sit amet consectetur. Quis tincidunt quis
              euismod scelerisque pellentesque. A sem velit cursus elementum sit
              sit semper consequat.
            </p>
          </div>
          <div className="box" data-aos="fade-right">
            <h3>Experience the texture</h3>
            <p>
              High-quality chocolate has a silky matte gloss and velvety
              texture. The ideal temperature to enjoy it is 18 degrees Celsius,
              similarly to fine wine.
            </p>
            <div className="img-box">
              <Image
                src="/Tasting/Tasting1.png"
                width={250}
                height={150}
                alt="Tasting 1s"
              />
            </div>
          </div>
          <div className="box" data-aos="fade-right">
            <h3>Smell the aromas</h3>
            <p>
              Expertly crafted chocolate has an incredibly complex bouquet. What
              do you smell? Roasted cocoa, caramel or notes of vanilla?
            </p>
            <div className="img-box">
              <Image
                src="/Tasting/Tasting2.png"
                width={250}
                height={150}
                alt="Tasting 2s"
              />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="box" data-aos="fade-left">
            <h3>Hear the freshness</h3>
            <p>
              Perfectly tempered chocolate has a clearly audible snap. Milk
              chocolate has a quieter snap because of the milk fat . Go on and
              give it a try!
            </p>
            <div className="img-box">
              <Image
                src="/Tasting/Tasting3.png"
                width={250}
                height={150}
                alt="Tasting 3s"
              />
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <h3>Taste the quality</h3>
            <p>
              Take a piece and let it melt on your tongue. This is the best way
              to let all the complex flavors and aromas unfold.
            </p>
            <div className="img-box">
              <Image
                src="/Tasting/Tasting4.png"
                width={250}
                height={150}
                alt="Tasting 4s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tasting;
