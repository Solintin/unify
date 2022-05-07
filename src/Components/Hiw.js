import React from "react";
import unify_gif from "../Assets/Img/unify-gif.gif";

const HowItworks = () => {
  return (
    <div className="bg-[#452763]  md:-translate-y-20 md:h-[680px] h-[1150px] transform md:ml-[75px] md:rounded-tl-xl">
      <div className="w-11/12 mx-auto container grid md:grid-cols-2 pt-28   md:gap-28 gap-8">
        <div className="md:mt-7">
          <h1 className="font-medium text-[32px] mb-8 text-white text-center md:text-left">How it works</h1>
          <div className="flex space-x-7 items-center font-medium mb-[35px] ml-10 md:ml-0">
            <p className="text-[#BC9CDB] text-[60px]">01</p>
            <p className="text-[#fff] text-[20px]">Request demo </p>
          </div>
          <div className="flex space-x-7 items-center font-medium mb-[35px] ml-10 md:ml-0">
            <p className="text-[#BC9CDB] text-[60px]">02</p>
            <p className="text-[#fff] text-[20px]">Download the app </p>
          </div>
          <div className="flex space-x-7 items-center font-medium mb-[35px] ml-10 md:ml-0">
            <p className="text-[#BC9CDB] text-[60px]">03</p>
            <p className="text-[#fff] text-[20px]">Onboard your students </p>
          </div>
        </div>
        <div  className="flex justify-center transform translate-y-[0px]">
          <img src={unify_gif} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItworks;
