"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./OurPartner.css";

function OurPartner() {
  const [Slider, SetSlider] = useState(null);
  const [Partners, SetPartners] = useState([
    "/Partners/breadfast.png",
    "/Partners/clirckle.png",
    "/Partners/goodmart.png",
    "/Partners/mini.png",
    "/Partners/tabbit.png",
    "/Partners/the way to go.png",
  ]);

  const NextSlider = () => {
    Slider.slideNext();
  };
  const PreviousSlider = () => {
    Slider.slidePrev();
  };

  return (
    <div className="OurPartner">
      <div className="container">
        <h1>Our Partners</h1>
        <div className="actions">
          <button className="next" onClick={() => PreviousSlider()}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <div className="swiper-conteiner">
            <Swiper
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                350: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 4,
                },

                992: {
                  slidesPerView: 6,
                },
              }}
              onSwiper={(s) => {
                SetSlider(s);
              }}
              spaceBetween={50}
            >
              {Partners.map((part, index) => (
                <SwiperSlide key={index}>
                  <div className="image-card">
                    <Image width={100} height={100} alt="user" src={part} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="previous" onClick={() => NextSlider()}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default OurPartner;
