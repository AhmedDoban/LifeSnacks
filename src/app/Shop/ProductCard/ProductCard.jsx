import Image from "next/image";
import React from "react";
import "./ProductCard.css";

function ProductCard({ image, title, subtitle, price }) {
  return (
    <div className="ProductCard">
      <div className="img-card">
        <Image src={image} width={200} height={200} alt={title} />
      </div>
      <div className="info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <h3>
          <span>{price} </span>
          <p>EGP</p>
        </h3>
      </div>
      <div className="actions">
        <button>
          <span>Add to cart</span>
          <Image src="/Shop/cartIcon.png" width={50} height={50} />
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
