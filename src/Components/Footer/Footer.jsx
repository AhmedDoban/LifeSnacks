import Image from "next/image";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-content">
          <div className="box">
            <div className="logo">
              <Image
                src="/Navbar/Logo.png"
                width={150}
                height={70}
                alt="Logo"
              />
            </div>
            <p>
              We only deliver to Cairo & Giza (except Friday, Saturday and
              Holidays)
            </p>
          </div>
          <div className="box">
            <h3> Delivery</h3>
            <p>
              We only deliver to Cairo & Giza (except Friday, Saturday and
              Holidays)
            </p>
            <div className="inside-box">
              <span>Within 24 hrs :</span>
              <ul>
                <li>New Cairo & Heliopolis</li>
                <li>Sheikh Zayed & October</li>
              </ul>
            </div>
            <p>Other zones delivery within 48hrs.</p>
          </div>
          <div className="box">
            <h3> Social Media</h3>
            <p>Follow us on social media platforms.</p>
            <div className="social-media-box">
              <div className="social">
                <h3>Wunder</h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="social">
                <h3>Scrunch</h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="social">
                <h3> Bake At Home </h3>
                <div className="container-social">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a>
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <h3>Contact us</h3>
            <a className="contact-box">
              <i className="fa-solid fa-location-dot"></i>
              <p>Address: Factory #313 Industrial ZoneThird Settlement,</p>
            </a>
            <a className="contact-box">
              <i className="fa-solid fa-phone"></i>
              <p>(+20) 102 010-0045</p>
            </a>
            <a className="contact-box">
              <i className="fa-solid fa-envelope"></i>
              <p>customercare@lifesnacks.me</p>
            </a>
          </div>
        </div>
        <div className="copyrit">
          <p>2024 @ all copyright reserved</p>
          <p>© 2024 Proudly Powered by O-Projects</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
