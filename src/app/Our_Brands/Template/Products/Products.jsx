"use client";
import Image from "next/image";
import "./Products.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Products({ backgroundColor, DummyProducts }) {
  const path = usePathname();
  const UserPath = path.split("/");

  return (
    <div
      className="Our_BrandsProducts"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="container">
        <h3 data-aos="fade-down">Show Our Product</h3>
        <span data-aos="fade-up">20 Items</span>
        <div className="Our_BrandsProducts_container" data-aos="fade-up">
          {DummyProducts.map((product, index) => (
            <div className="card" key={index}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={240}
              />
              <h1>{product.name}</h1>
              <Link href={`/Our_Brands/${UserPath[2]}/${product.id}`}>
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
