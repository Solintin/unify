import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../Assets/Svg/logo.svg";
import hamburger from "../../Assets/Svg/hamburger.svg";
import { MdClose } from "react-icons/md";
import ArrowDown from "../../Assets/Svg/ArrowDown.svg";
import productUnifyLogo from "../../Assets/Svg/productunifylogo.svg";
import arrowright from "../../Assets/Svg/arrowright.svg";
import forms from "../../Assets/Svg/forms.svg";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [productInfo, setProductInfo] = useState(false);

  return (
    <div className="fixed z-30  header-mobile top-0 w-full">
      <div className="w-11/12 mx-auto container ">
        <div className="py-3 flex justify-between items-center">
          <div>
            <a href="/">
              <img src={logo} alt="" className="w-full h-full object-contain" />
            </a>
          </div>
          <button
            onClick={() => {
              setIsMobile(!isMobile);
            }}
          >
            {isMobile ? (
              <>
                <MdClose className="text-3xl" />
              </>
            ) : (
              <>
                <img
                  src={hamburger}
                  className="w-6 h-6 object-contain"
                  alt=""
                />
              </>
            )}
          </button>
        </div>
        {isMobile && (
          <>
            <div className=" bg-white z-20 inset-x-0 top-[43px] pb-20">
              <div className=" flex flex-col space-y-8 mb-4">
                <NavLink
                  activeClassName="active_link"
                  className={`text-[#575765] text-base`}
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName="active_link"
                  className={`text-[#575765] text-base`}
                  to="/features"
                >
                  Features
                </NavLink>
                <div
                  onClick={() => {
                    setProductInfo(!productInfo);
                  }}
                  className={`text-[#575765] cursor-pointer flex items-center text-base `}
                >
                  Products
                  <img src={ArrowDown} className="ml-2" alt="" />
                </div>
                {productInfo && (
                  <>
                    <div className="pl-5">
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
                  </>
                )}
                <NavLink
                  activeClassName="active_link"
                  className={`text-[#575765] text-base `}
                  to="/faqs"
                >
                  FAQs
                </NavLink>
              </div>
              <button className="w-full bg-black rounded-[8px] p-2 text-white text-base">
                Request demo
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
