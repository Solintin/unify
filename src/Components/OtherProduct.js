import React, { useState } from "react";
import productUnifyLogo from "../Assets/Svg/productunifylogo.svg";
import arrowright from "../Assets/Svg/arrowright.svg";
import forms from "../Assets/Svg/forms.svg";
import Forms from "../Components/Desktop/Forms";

const OtherProduct = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div className="pb-20 pt-5">
      <p className="text-center text-3xl font-medium">
        Other products from Unify
      </p>

      <div className=" py-3 w-9/12 mx-auto  grid md:grid-cols-12  mt-10">
        <div className="col-span-6 w-[312px] ">
          <div className="mb-4 space-y-5">
            <img src={productUnifyLogo} className="w-[158px] h-[63px]" alt="" />
            <p>Certification by Unify</p>
            <p>
              Certifications by Unify is an online learning platform that allows
              anyone to watch, listen and learn from our everyday STARS. The
              goal is to aid people with little or no experience learn from
              powerfully talented individuals using brilliant storytelling and
              in-depth learning methods.
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-8">
            <p>Visit site</p>
            <img src={arrowright} alt="" />
          </div>
        </div>
        <div className="md:ml-10 col-span-6 w-[312px]">
          <div className="space-y-5 mb-4">
            <img src={forms} className="w-[158px] h-[63px]" alt="" />
            <p>Unify forms</p>
            <p>
              A retail product that bridges the gap between K-12 schools that
              want to double their student intake and students looking for
              admission in the most stress free way.
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-8">
            <button
              onClick={() => {
                setOpenForm(!openForm);
              }}
            >
              Go to forms
            </button>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>
      {openForm && (
        <Forms
          handleClose={() => {
            setOpenForm(!openForm);
          }}
        />
      )}
    </div>
  );
};

export default OtherProduct;
