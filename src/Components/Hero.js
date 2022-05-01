import React from "react";
import "./Component-styles.css";
import arrowright from "../Assets/Svg/arrowrightwhite.svg";
import HeroImg from "../Assets/Img/HeroImg.png";

const Hero = () => {
  return (
    <div className="w-11/12 container mx-auto py-16">
      <div className="grid md:grid-cols-12 ">
        <div className=" text-center md:text-left col-span-5 space-y-6 flex-col items-center justify-center md:flex-row md:justify-start order-last md:order-first">
          <div className="relative max-w-[400px] text-[40px] text-[#1b1b22] font-semibold">
            <span>Digitalized education for the future at no extra cost. </span>
            {
            // <span className="dot">  </span>
            }
          </div>
          <p className="text-[#383841] text-[18px] ">
            Imagine being able to extend your Institutions reach beyond walls,
            make admission processes easy, manage student data, organize classes
            remotely and much more, all at no extra cost.
          </p>
          <div className="flex md:justify-start justify-center items-center space-x-9">
            <button className="cta-button flex items-center space-x-2">
              <span>Request demo</span> <img src={arrowright} alt="" />
            </button>
            <a href="#" className="underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-span-7 text-black md:pl-20 pl-0 flex space-x-2">
          <img src={HeroImg} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
