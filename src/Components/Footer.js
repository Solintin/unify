import React, { useState } from "react";
import ios from "../Assets/Svg/ios.svg";
import android from "../Assets/Svg/android.svg";
import combo from "../Assets/Svg/combo.svg";
import logowhite from "../Assets/Svg/logowhite.svg";
import ig from "../Assets/Svg/ig.svg";
import fb from "../Assets/Svg/fb.svg";
import twitter from "../Assets/Svg/twitter.svg";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";
import Forms from "./Desktop/Forms";

const Footer = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="grid">
      <div className="bg-[#1D0633]  z-10 py-10 text-white">
        <div className="border-b border-[#36125A]">
          <div className="w-11/12 container mx-auto ">
            <div className="grid md:grid-cols-12 items-center  gap-8 md:mb-16 mb-8">
              <div className="col-span-5  transform -translate-y-10">
                <div className="font-medium text-3xl mb-8">Get the app!</div>
                <div className="flex items-center space-x-4">
                  <img src={ios} alt="" />
                  <img src={android} alt="" />
                </div>
              </div>
              <div className="md:col-span-7 col-span-6 md:order-last order-first">
                {" "}
                <div className="transform -translate-y-24">
                  <img src={combo} alt="" />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 container mx-auto ">
          <div className="grid md:grid-cols-12 items-center   py-20">
            <div className="mt-10 md:mt-0 col-span-5">
              <div>
                <img src={logowhite} alt="logowhite" />
              </div>
              <p className="mt-5 mb-16 pr-28">Enabling the future</p>
              <p className="mt-2 mb-4">Join our Community</p>

              <div className="flex border border-[#311849] p-[3px] md:w-[380px]">
                <input
                  type="text"
                  placeholder="Enter Your email"
                  className="flex-1 outline-none border-none p-2 bg-transparent"
                />
                <button className="border py-1 rounded px-2">Submit</button>
              </div>
            </div>
            <div className="md:pl-24 col-span-7 md:order-last order-first">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h1>Links</h1>
                  <div className="text-left mt-8 text-[#ECD8FF] text-base flex flex-col space-y-5">
                    <PopupButton
                      url="https://calendly.com/ufy/unify-product-demo"
                      rootElement={document.getElementById("root")}
                      text="Request demo"
                    />
                    <Link to="#"> Download the app</Link>
                    <Link to="#"> Certifications by Unify </Link>
                    <p
                      onClick={() => {
                        setOpenForm(!openForm);
                      }}
                    >
                      {" "}
                      Unify forms{" "}
                    </p>
                  </div>
                </div>

                <div>
                  <h1>About</h1>
                  <div className="mt-8 text-[#ECD8FF] text-base flex flex-col space-y-5">
                    <Link to="/about"> About us </Link>
                    <Link to="/faqs"> FAQs</Link>
                    <Link to="/features"> Features </Link>
                    <Link to="/tandc"> Terms & Conditions </Link>
                    <Link to="privacy"> Privacy policy</Link>
                  </div>
                </div>
                <div>
                  <h1>Socials</h1>
                  <div className="hidden md:flex mt-8 text-[#ECD8FF] text-base  flex-col space-y-5">
                    <a href="https://www.instagram.com/unify_ng/">
                      {" "}
                      Instagram{" "}
                    </a>

                    <a href="https://web.facebook.com/unifyng/">Facebook</a>

                    <a href="https://twitter.com/unify_ng/"> Twitter </a>
                  </div>
                  <div className="md:hidden mt-8 flex space-x-9">
                    <a href="https://web.facebook.com/unifyng/">
                      {" "}
                      <img src={fb} alt="" />{" "}
                    </a>
                    <a href="https://www.instagram.com/unify_ng/">
                      {" "}
                      <img src={ig} alt="" />{" "}
                    </a>
                    <a href="https://twitter.com/unify_ng/">
                      {" "}
                      <img src={twitter} alt="" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

export default Footer;
