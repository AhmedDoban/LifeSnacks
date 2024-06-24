import Image from "next/image";
import React from "react";
import "./Scrunch.css";
import { DummyProducts } from "../../Our_Brands/scrunch/Dummy.js";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Scrunch() {
  return (
    <div className="ShopScrunch">
      <div className="filter-part">
        <h2>Scrunch</h2>
        <div className="filter-products">
          <Swiper
            modules={[Pagination]}
            breakpoints={{
              350: {
                slidesPerView: 3,
              },
              720: {
                slidesPerView: 5,
              },

              992: {
                slidesPerView: 8,
              },
            }}
            spaceBetween={5}
          >
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch1.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Nuts</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch2.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Clusters</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch3.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Nuts bars</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch4.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Chocolate barks</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch5.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Coconut clusters</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch6.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Granola bars</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <Image
                  src="/Shop/Scrunch/Scrunch7.png"
                  width={50}
                  height={60}
                  alt="Scrunch"
                />
                <p>Marshmallow bars</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="ShopScrunch-productsContainer">
        {DummyProducts.map((el) => (
          <ProductCard
            image={el.image}
            title={el.name}
            subtitle={
              "Premium quality 70% Belgian Dark Chocolate Bark will indulge in your senses feelings its rich flavor blending with the crunchy honeycomb pieces."
            }
            price={100}
          />
        ))}
      </div>
    </div>
  );
}

export default Scrunch;
