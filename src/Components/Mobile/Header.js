import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../Assets/Svg/logo.svg";
import hamburger from "../../Assets/Svg/hamburger.svg";

const Header = () => {
  const navigationsLinks = [
    { title: "Home", link: "home" },
    { title: "Features", link: "features" },
    { title: "Products", link: "products" },
    { title: "FAQs", link: "Faqs" },
  ];
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <div>
      <div className="header container py-3 w-11/12 mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className=" flex justify-between items-center space-x-8">
          {navigationsLinks.map((item, id) => {
            return (
              <NavLink
                activeClassName="active_link"
                className={`text-[#575765] text-base`}
                key={id}
                to={`/${item.link}`}
              >
                {item.title}
                {
                  // item.title === 'Products' &&  <img src={ArrowDown} alt="" />
                }
              </NavLink>
            );
          })}
        </div>
        <div className="bg-black rounded-[8px] p-2 text-white text-base">
          Request demo
        </div>
      </div>
    </div>
  );
};

export default Header;
