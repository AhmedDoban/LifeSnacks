import NavLink from "@/Components/Navbar/NavLink";
import "./Landing.css";

function Landing() {
  return (
    <div className="Landing">
      <div className="video">
        <video
          muted={true}
          loop={true}
          className="LandingVideo"
          src="/Landing.mp4"
          autoPlay={true}
        />
      </div>
      <div className="container">
        <div className="content" data-aos="fade-up">
          <h1 >
            At our core, we are a team of passionate individuals dedicated to
            providing top-quality products by using superior ingredients.
          </h1>
          <NavLink href="/about/our story">Our Story</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Landing;
