import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../Assets/Svg/logo.svg";
import ArrowDown from "../../Assets/Svg/ArrowDown.svg";
import Product from "./Product";
import { PopupButton } from "react-calendly";

const Header = () => {
  const [productInfo, setProductInfo] = useState(false);

  return (
    <div className="fixed z-10 bg-[#FAFAFA] inset-x-0 top-0">
      <div className="header container py-3 w-11/12 mx-auto flex justify-between items-center">
        <div>
          <a href="/">
            <img src={logo} alt="" className="w-full h-full object-contain" />
          </a>
        </div>
        <div className=" flex justify-between items-center space-x-8">
          <NavLink
            onClick={() => setProductInfo(false)}
            activeClassName="active_link"
            className={`text-[#575765] text-base`}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setProductInfo(false)}
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
            className={`${
              productInfo ? "text-[#1B1B22]" : ""
            }  text-[#575765] cursor-pointer flex items-center text-base `}
          >
            Products
            <img src={ArrowDown} className="ml-2" alt="" />
          </div>
          {productInfo && <Product />}
          <NavLink
            onClick={() => setProductInfo(false)}
            activeClassName="active_link"
            className={`text-[#575765] text-base `}
            to="/faqs"
          >
            FAQs
          </NavLink>
        </div>

        <PopupButton
          className="bg-black rounded-[8px] p-2 text-white text-base"
          url="https://calendly.com/ufy/unify-product-demo"
          rootElement={document.getElementById("root")}
          text="Request demo"
        />
      </div>
    </div>
  );
};

export default Header;
