import React from "react";
import "./Component-styles.css";
import mark from "../Assets/Svg/mark.svg";
import partner1 from "../Assets/Svg/partner1.svg";
import partner2 from "../Assets/Svg/partner2.svg";
import partner3 from "../Assets/Svg/partner3.svg";
import partner4 from "../Assets/Svg/partner4.svg";
import partner5 from "../Assets/Svg/partner5.svg";

const Partners = () => {
  return (
    <div className="bg-[#E7DFED] py-20">
      <div className="justify-center flex text-[32px] text-[#1B1B22]">
        Driving
        <div className="relative mx-1">
          <div className="absolute  translate-y-10">
            <img src={mark} alt="" />
          </div>
          growth
        </div>
        in top tertiary institutions
      </div>

      <div className="flex md:justify-center px-5 items-center space-x-[100px] mt-10 mb-20 md:overflow-x-hidden overflow-x-scroll">
        <img src={partner1} className="h-100px] w-[100px]" alt="" />
        <img src={partner2} className="h-100px] w-[100px]" alt="" />
        <img src={partner3} className="h-100px] w-[100px]" alt="" />
        <img src={partner4} className="h-100px] w-[100px]" alt="" />
        <img src={partner5} className="h-100px] w-[100px]" alt="" />
      </div>
    </div>
  );
};

export default Partners;
