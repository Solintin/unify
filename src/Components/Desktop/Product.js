import React from "react";
import productUnifyLogo from "../../Assets/Svg/productunifylogo.svg";
import arrowright from "../../Assets/Svg/arrowright.svg";
import forms from "../../Assets/Svg/forms.svg";
import './style.css'
const Product = () => {
  return (
    <div className="header-productInfo productInfo">
      <div className="fixed header-productInfo inset-x-0 top-14 pb-11">
        <div className="header container py-3 w-11/12 mx-auto grid grid-cols-12">
          <div className="col-span-5 text-[20px] font-medium">
            Products by Unify
          </div>
          <div className="col-span-7">
            <div className="flex items-center space-x-2 mb-4">
              <img src={productUnifyLogo} alt="" />
              <p>Certification by Unify</p>
            </div>
            <div className="flex items-center space-x-2 mb-8">
              <p>Visit site</p>
              <img src={arrowright} alt="" />
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={forms} alt="" />
              <p>Unify forms</p>
            </div>
            <div className="flex items-center space-x-2 ">
              <p>Visit site</p>
              <img src={arrowright} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
