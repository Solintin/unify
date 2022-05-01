import React from "react";
import feature1 from "../Assets/Svg/feature1.svg";
import feature2 from "../Assets/Svg/feature2.svg";
import feature3 from "../Assets/Svg/feature3.svg";
import feature4 from "../Assets/Svg/feature4.svg";
import arrowright from "../Assets/Svg/arrowright.svg";
import dashline from "../Assets/Svg/dashline.svg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="relative bg-[#F1EBE3] py-10 ">
      <div className="container w-11/12 mx-auto">
        <div className="relative mt-2 mb-5">
          <p className="title-feat"></p>
        </div>

        <p className="mb-14 pt-6 fomt-medium text-3xl text-center">
          What we offer
        </p>
        <div className="hidden lg:block transform translate-y-[380px] translate-x-[120px] z-[1]  absolute ">
          <img src={dashline} className="h-full w-full" alt="feature1" />
        </div>
        <div className="  grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className='z-[2]'>
            <img src={feature1} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Robust school management system
            </h1>
            <p className="text-xl mt-8 text-[#575765]">
              All users are able to effectively manage their activities from
              dashboards specially tailored to their needs.
            </p>
          </div>
        </div>
        <div className="z-[2] grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last z-[2]">
            <img src={feature2} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left  md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Student Id and debit card integration
            </h1>
            <p className="text-xl mt-8 text-[#575765] ">
              A wallet system is created for all users of the platform toward
              performing various financial transactions such as paying school
              fees, buying materials,staff salaries etc. This allows for proper
              financial management and tracking for students, staff, and the
              institution at large.
            </p>
          </div>
        </div>
        <div className="z-[2] grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className='z-[2] '>
            <img src={feature3} className=" h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">Unify student cards</h1>
            <p className="text-xl mt-8 text-[#575765]">
              Debit cards linked to their wallets are issued to all users of the
              platform. These cards will be acceptable anywhere in Nigeria to
              make online payment, In-store Payments, ATM Withdrawals.
            </p>
          </div>
        </div>
        <div className="z-[2] grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last z-[2] ">
            <img src={feature4} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Timely Updates Through Newsletter
            </h1>
            <p className="text-xl mt-8 text-[#575765]">
              All users are able to effectively manage their activities from
              dashboards specially tailored to their needs.
            </p>
          </div>
        </div>

        <p className="text-center">
          <Link
            to="/features"
            className="flex space-x-2 justify-center items-center"
          >
            View more Features
            <span>
              <img src={arrowright} className="h-full w-full ml-2" alt="" />
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Features;
