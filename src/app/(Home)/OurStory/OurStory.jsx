import Image from "next/image";
import "./OurStory.css";
import NavLink from "@/Components/Navbar/NavLink";

function OurStory() {
  return (
    <div className="OurStory">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <Image src="/OurStory.jpg" alt="ourStory" width={400} height={400} />
        </div>
        <div className="right">
          <span data-aos="fade-down">Our Story</span>
          <h1 data-aos="fade-down"> Life Snacks</h1>
          <p data-aos="fade-down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero,
            sunt consectetur dicta consequuntur tempore eos laborum perferendis
            aliquam sapiente ipsam nostrum quisquam voluptatem consequatur enim
            incidunt eaque. Quod, eum.
          </p>
          <NavLink href="Our Story" data-aos="fade-down">
            Learn more
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default OurStory;
