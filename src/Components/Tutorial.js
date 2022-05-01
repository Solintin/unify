import React from "react";
import "./Component-styles.css";
import ropearrow from "../Assets/Svg/ropearrow.svg";


const Tutorial = () => {
  return (
    <div className="relative">
      <div className="bg-[#F1EBE3]  md:h-[320px] h-[200px]"></div>
      <div className="transform md:-translate-y-[200px] -translate-y-[105px] w-11/12 md:w-7/12 container mx-auto ">
        <iframe
        title="Unify educative tutorial workthrough"
        className="w-full md:h-[380px] h-[250px] ring-4 ring-white  rounded"
          src="https://www.youtube.com/embed/HAyzyskPuZU"
        ></iframe>
      </div>
      <div className="absolute hidden md:block top-[350px] left-[50px]"> <img src={ropearrow} alt="" /> </div>
    </div>
  );
};

export default Tutorial;
