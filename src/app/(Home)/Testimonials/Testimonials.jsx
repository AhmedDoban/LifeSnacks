"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Testimonials.css";
import Image from "next/image";

function Testimonials() {
  const TestimonialsData = [{}, {}, {}, {}];
  const [Slider, SetSlider] = useState(null);

  const NextSlider = () => {
    Slider.slideNext();
  };
  const PreviousSlider = () => {
    Slider.slidePrev();
  };

  return (
    <div className="Testimonials">
      <div className="container">
        <span data-aos="fade-down">Testimonials</span>
        <h1 data-aos="fade-down">
          What our <br />
          customers say ?
        </h1>
        <div className="actions">
          <button className="next" onClick={() => PreviousSlider()}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <div className="swiper-conteiner">
            <Swiper
              loop={true}
              centeredSlides={true}
              modules={[Pagination]}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },

                992: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(s) => {
                SetSlider(s);
              }}
              spaceBetween={10}
            >
              {TestimonialsData.map((user, index) => (
                <SwiperSlide key={index}>
                  <div className={`TestimonialsCard`}>
                    <Image
                      width={100}
                      height={100}
                      alt="user"
                      src={"/user.jpeg"}
                    />
                    <h1>Rachel Johnston</h1>
                    <p>Rachel69@hotmail.com</p>
                    <div className="Stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="UserTestimonion">
                      Lorem ipsum dolor sit amet consectetur. Bibendum tortor
                      nisl est nibh adipiscing consectetur adipiscing velit
                      consectetur. Eu vel leo faucibus a gravida gravida amet.
                      Eu fusce faucibus vitae viverra libero
                    </p>
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
export default Testimonials;
