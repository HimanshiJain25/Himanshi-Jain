import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"; // Includes base styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; // Import styles for autoplay

import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "./slider.css";

// Importing images
import p3s1 from "../../Assets/project5/cover page.png";
import p3s2 from "../../Assets/project6/rfid cover page.png";
import p3s3 from "../../Assets/project7/cover page.png";
import p3s4 from "../../Assets/project8/cover page.png";
import p3s5 from "../../Assets/project9/d1.png";
import p3s6 from "../../Assets/project10/p10cover page.png";

const Slider = ({ onSlideClick }) => {
  // Array of imported images
  const slides = [p3s1, p3s2, p3s3, p3s4, p3s5, p3s6];

  return (
    <div className="custom-swiper-container">
              <div className="more-projects">
          <p>More Projects</p>
        </div>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="tranding-slide">
            <div
              className="tranding-slide-img"
              onClick={() => onSlideClick(index)} // Pass the clicked index
              style={{ cursor: "pointer" }} // Add pointer cursor for clarity
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Slider;
