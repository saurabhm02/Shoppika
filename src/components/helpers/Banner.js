import React, { useState } from "react";
import banner01 from "../../assets/banners/banner1.jpg";
import banner02 from "../../assets/banners/banner2.jpg";
import banner03 from "../../assets/banners/banner3.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Slider from "react-slick";
import BannerText from "./BannerText";

const Banner = () => {
  
 const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className=" bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute lg:right-8 lg:top-[40%] lg:p-3 md:right-6 md:top-[40%] md:p-3 sm:right-4 sm:top-[30%] sm:p-2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className= "bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute lg:left-4 lg:top-[40%] lg:p-3 md:top-[40%] md:p-3 sm:left-2 sm:top-[30%] sm:p-2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  

  return (
    <div className="relative">
      {/* <Slider {...settings}>
        <div className="w-full h-full relative">
          <img
            src={bannerone}
            alt="bannerone"
            className="w-full h-[80vh] relative"
          />
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-full h-full relative">
          <img
            src={bannertwo}
            alt="bannertwo"
            className="w-full h-[80vh] object-cover relative"
          />
          <BannerText title="Seasonal Offers" />
        </div>
        <div className="w-full h-full relative">
          <img
            src={bannerthree}
            alt="bannerthree"
            className="w-full h-[80vh] object-cover relative"
          />
          <BannerText title="Best for men" />
        </div>
        <div className="w-full h-full  relative">
          <img
            src={bannerfour}
            alt="bannerthree"
            className="w-full h-[80vh] object-cover relative"
          />
          <BannerText title="Best for men" />
        </div>
      </Slider> */}

      <Slider {...settings}>
        <div className="w-full h-full relative">
          <img
            src={banner01}
            alt="bannerone"
            className="w-full h-full relative"
          />
          <BannerText title="Universal Haven" />
        </div>
        <div className="w-full h-full relative ">
          <img
            src={banner02}
            alt="bannertwo"
            className="w-full h-full relative "
          />
          <BannerText title="Everest Shoppika" />s
        </div>
        <div className="w-full h-full relative">
          <img
            src={banner03}
            alt="bannerthree"
            className="w-full h-full relative"
          />
          <BannerText title="Style Hub" />
        </div>
        </Slider>
      {/* <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" /> */}
    </div>

  );
};

export default Banner;