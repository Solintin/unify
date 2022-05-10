import React from "react";
import findform from "../../Assets/Svg/findform.svg";
import uploadform from "../../Assets/Svg/uploadform.svg";
import arrowright from "../../Assets/Svg/arrowrightwhite.svg";

const Forms = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 h-screen">
      <div
        className="-z-1 absolute inset-0 bg-[#00000050] cursor-pointer"
        onClick={() => handleClose()}
      ></div>
      <div className="h-auto z-10 absolute md:left-1/2 md:-translate-x-1/2 mt-12 md:p-14 p-4 md:w-8/12 mx-5 rounded-md py-8  bg-white">
        <h1 className="text-center font-medium text-2xl">Unify Forms</h1>

        <div className="grid md:grid-cols-2 divide-x divide-gray-300  mt-5 ">
          <div className="pr-[60px]">
            <h1 className="text-xl font-medium mb-7">
              For prospective students
            </h1>
            <p className="mb-[40px]">
              Looking to start your enrollment process? Find entry forms for all
              nursery, primary and secondary schools
            </p>
            <img
              src={findform}
              className="h-[166px] w-[184px] mx-auto mb-10"
              alt=""
            />
            <a
              href="http://projectdemo.com.ng/colab/"
              className="cta-button flex items-center space-x-2 max-w-max"
            >
              <span>Find forms</span> <img src={arrowright} alt="" />
            </a>
          </div>
          <div className="pl-16">
            <h1 className="text-xl font-medium mb-7">
              For prospective students
            </h1>
            <p className="mb-[40px]">
              Looking to start your enrollment process? Find entry forms for all
              nursery, primary and secondary schools
            </p>
            <img src={uploadform} className=" mx-auto mb-[90px]" alt="" />
            <a
              href="http://projectdemo.com.ng/colab/user/register"
              onClick={() => handleClose()}
              className="cta-button flex items-center space-x-2 max-w-max"
            >
              <span>Upload forms</span> <img src={arrowright} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
