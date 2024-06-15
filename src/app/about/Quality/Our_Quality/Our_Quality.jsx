import Image from "next/image";
import "./Our_Quality.css";

function Our_Quality() {
  return (
    <div className="Our_Quality">
      <div className="container">
        <div className="info" data-aos="fade-down">
          <span>About</span>
          <h3>Our Quality</h3>
        </div>
        <div className="Our_Quality_Container" >
          <div className="box" data-aos="zoom-in">
            <div className="imga-box">
              <Image
                src="/Quality/bean.png"
                width={40}
                height={40}
                alt="been"
              />
            </div>
            <h4>Enjoy the Freshness</h4>
            <p>
              All our ingredients are carefully selected. Only the best is good
              enough. For us, freshness is not a matter of finest taste. It is
              our everlasting frame of mind. <br/>In connecting the rainforests with
              the Swiss Alps, we find the origins of our taste. We accompany our
              chocolate every step of the way: from the cocoa fields to our
              customers. And we know each of our partners by name and by heart.
            </p>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="imga-box">
              <Image
                src="/Quality/Flag.png"
                width={40}
                height={40}
                alt="been"
              />
            </div>
            <h4>Quality from Switzerland</h4>
            <p>
              We are proud to produce exclusively in Switzerland to guarantee
              the highest quality. We love our Swiss culture and Swiss
              traditions.<br/> They have always inspired us in our work. Our roots
              are the base for our innovations. The Swiss Alps are our home. But
              the world is our guest.
            </p>
          </div>
          <div className="box" data-aos="zoom-in">
            <div className="imga-box">
              <Image src="/Quality/cup.png" width={40} height={40} alt="been" />
            </div>
            <h4>The Tradition of the Chocolatiers</h4>
            <p>
              We are masters of our craft and strive for perfection every day.
              The shared passion for chocolate unites us. We still make many of
              our products by hand.
              <br/> For something to be beautiful, it must be
              unique. We believe in the authentic craft. And we continue the
              tradition of the Chocolatiers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Our_Quality;
