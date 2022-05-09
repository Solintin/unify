import React from "react";
import findform from "../../Assets/Svg/findform.svg";
import uploadform from "../../Assets/Svg/uploadform.svg";
import arrowright from "../../Assets/Svg/arrowrightwhite.svg";

const Forms = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 ">
      <div
        className="-z-1 absolute inset-0 bg-[#00000050] cursor-pointer"
        onClick={() => handleClose()}
      ></div>
      <div className="z-10 absolute form  mt-16 p-14 w-8/12 rounded-md py-8  bg-white">
        <h1 className="text-center font-medium text-2xl">Unify Forms</h1>

        <div className="grid md:grid-cols-2 divide-x divide-gray-300  mt-10 ">
          <div className="pr-[60px]">
            <h1 className="text-xl font-medium mb-7">
              For prospective students
            </h1>
            <p className="mb-[60px]">
              Looking to start your enrollment process? Find entry forms for all
              nursery, primary and secondary schools
            </p>
            <img
              src={findform}
              className="h-[166px] w-[184px] mx-auto mb-16"
              alt=""
            />
            <button
              onClick={() => handleClose()}
              className="cta-button flex items-center space-x-2"
            >
              <span>Request demo</span> <img src={arrowright} alt="" />
            </button>
          </div>
          <div className="pl-16">
            <h1 className="text-xl font-medium mb-7">
              For prospective students
            </h1>
            <p className="mb-[60px]">
              Looking to start your enrollment process? Find entry forms for all
              nursery, primary and secondary schools
            </p>
            <img src={uploadform} className=" mx-auto mb-28" alt="" />
            <button
              onClick={() => handleClose()}
              className="cta-button flex items-center space-x-2"
            >
              <span>Request demo</span> <img src={arrowright} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
