"use client";
import { useParams } from "next/navigation";
import { DummyProducts } from "../Dummy.js";
import { useState } from "react";
import "./Details.css";
import Link from "next/link";
import Image from "next/image";

function Page() {
  const params = useParams();
  const [SingleProduct, SetSingleProduct] = useState(
    DummyProducts[params.id - 1]
  );
  const [ImageShown, SetImageShown] = useState(true);

  return (
    <div
      className="Our_BrandsProductDetails"
      style={{ backgroundColor: SingleProduct.theme }}
    >
      <div className="container">
        <div className="navigation-info" data-aos="fade-down">
          <Link href="/">Home</Link>
          <i className="fa-solid fa-arrow-right-long"></i>
          <Link href="/Our_Brands">Our Brand</Link>
          <i className="fa-solid fa-arrow-right-long"></i>
          <Link href="/Our_Brands/scrunch">Scrunch</Link>
          <i className="fa-solid fa-arrow-right-long"></i>
          <span>{SingleProduct.name}</span>
        </div>
        <div className="product-Details-container" data-aos="fade-down">
          <div className="left">
            <h1>{SingleProduct.name}</h1>
            <ul>
              <li>
                Premium quality 70% Belgian Dark Chocolate Bark will indulge in
                your senses feelings its rich flavor blending with the crunchy
                honeycomb pieces.
              </li>
              <li>
                Delicious snack, perfect for desserts, backpacks and totes for
                an on-the-go bite to eat.
              </li>
              <li>
                Each bag contains 150 or 35 grams with just 192 calories per
                serving.
              </li>
              <li>Our products are simple & pure and Made in Egypt.</li>
              <li>
                These premium barks made with love and just natural ingredients
                have the perfect blend of Preservative Free, Gluten Free and No
                Artificial Additives.
              </li>
            </ul>
          </div>
          <div className="imge-slider">
            <Image
              src={ImageShown ? SingleProduct.image : SingleProduct.Backimage}
              width={300}
              height={400}
              alt={SingleProduct.name}
            />
          </div>
          <div className="right" data-aos="fade-down">
            <div className="info">
              <span>Ingredient</span>
              <h3>What's inside?</h3>
            </div>
            <ul className="integrates">
              {SingleProduct.Ingredient.map((ele) => (
                <li key={ele.name}>
                  <Image
                    src={ele.image}
                    height={100}
                    width={100}
                    alt={ele.name}
                  />
                  <div className="Product-Info">
                    <h3>{ele.name}</h3>
                    <p>{ele.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="image-chageSlider">
              <button className="box" onClick={() => SetImageShown(true)}>
                <Image
                  src={SingleProduct.image}
                  width={50}
                  height={50}
                  alt={SingleProduct.name}
                />
              </button>
              <button className="box" onClick={() => SetImageShown(false)}>
                <Image
                  src={SingleProduct.Backimage}
                  width={50}
                  height={50}
                  alt={SingleProduct.name}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
