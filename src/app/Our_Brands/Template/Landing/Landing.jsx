"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Landing.css"

function Landing({ BackGround, logo }) {
  const path = usePathname();
  const UserPath = path.split("/");

  return (
    <div className="Our_BrandsLanding" style={{ backgroundImage: `url(${BackGround})` }}>
      <div className="container">
        <Image width={300} height={200} alt="brand image" src={logo} />
        <div className="navigation-info">
          <Link href="/">Home</Link>
          <i className="fa-solid fa-arrow-right-long"></i>
          <Link href="/Our_Brands">Our Brands</Link>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>{UserPath[2]}</span>
        </div>
      </div>
    </div>
  );
}
export default Landing;
