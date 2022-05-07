import React from "react";
import productUnifyLogo from "../Assets/Svg/productunifylogo.svg";
import arrowright from "../Assets/Svg/arrowright.svg";
import forms from "../Assets/Svg/forms.svg";
const OtherProduct = () => {
  return (
    <div className="pb-20 pt-5">
      <p className="text-center text-3xl font-medium">
        Other products from Unify
      </p>

      <div className=" py-3 w-9/12 mx-auto  grid md:grid-cols-12  mt-10">
        <div className="col-span-6 w-[312px] ">
          <div className="mb-4 space-y-5">
            <img
              src={productUnifyLogo}
              className="w-[158px] h-[63px]"
              alt=""
            />
            <p>Certification by Unify</p>
            <p>
              Certifications by Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Varius proin pellentesque nibh id nunc, enim,
              vestibulum consectetur. Nisl posuere aliquam sodales lobortis nunc
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
            <p>Certification by Unify</p>
            <p>
              Certifications by Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Varius proin pellentesque nibh id nunc, enim,
              vestibulum consectetur. Nisl posuere aliquam sodales lobortis nunc
            </p>
          </div>
          <div className="flex items-center space-x-2 mb-8">
            <p>Visit site</p>
            <img src={arrowright} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProduct;
