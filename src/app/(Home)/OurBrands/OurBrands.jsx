import Image from "next/image";
import Link from "next/link";
import "./OurBrands.css";

function OurBrands() {
  const Brands = [
    {
      name: "scrunch",
      image: "/Navbar/scrunches.png",
      video: "/Our Brands/scrunch.mp4",
      color: "red",
      link: "",
    },
    {
      name: "wunder",
      image: "/Navbar/wunder.png",
      video: "/Our Brands/wunder.mp4",
      color: "yellow",
      link: "",
    },
    {
      name: "bake at home",
      image: "/Navbar/bake at home.png",
      video: "/Our Brands/bake at home.mp4",
      color: "yellow",
      link: "",
    },
  ];
  return (
    <div className="OurBrands">
      <div className="container">
        <h1 data-aos="fade-down">Our Brands</h1>
        <div className="box-container">
          {Brands.map((brand) => (
            <div className="box-brand" key={brand.name} data-aos="zoom-in">
              <div className={`image-box ${brand.color}`}>
                <Image
                  alt={brand.name}
                  src={brand.image}
                  width={200}
                  height={200}
                />
                <div className="videoPlayer">
                  <video src={brand.video} autoPlay muted loop />
                </div>
              </div>
              <Link href={brand.link}>Learn more</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OurBrands;
