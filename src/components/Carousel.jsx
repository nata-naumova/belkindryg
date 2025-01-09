import React from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

import { SLIDES } from "../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    cssEase: "linear",
  };

  return (
    <section className="">
      <div className="container">
        <Slider {...settings} className="slick-slider">
          {SLIDES &&
            SLIDES.map((item, index) => (
              <div key={index} className="slick-slide">
                <div className="slick-prev" />
                <div className="slick-next" />
                <div className="h-[300px] w-full relative flex flex-col justify-center gap-2 px-10">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50"
                  />
                  <p className="text-xs lg:text-base text-accent uppercase font-bold">
                    {item.desc}
                  </p>
                  <h1 className="text-xl lg:text-4xl md:text-2xl text-white line-clamp-3 w-full lg:w-3/4">
                    {item.title}
                  </h1>
                  <a
                    href={item.link}
                    className="text-white px-4 py-1 border-2 border-white/80 rounded-full text-sm lg:text-base w-max"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
