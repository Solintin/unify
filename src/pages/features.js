import React from "react";
import feature1 from "../Assets/Svg/feature1.svg";
import feature2 from "../Assets/Svg/feature2.svg";
import feature3 from "../Assets/Svg/feature3.svg";
import feature4 from "../Assets/Svg/feature4.svg";
import feature5 from "../Assets/Svg/feature5.svg";
import feature6 from "../Assets/Svg/feature6.svg";
import feature7 from "../Assets/Svg/feature7.svg";
import feature8 from "../Assets/Svg/feature8.svg";
import feature9 from "../Assets/Svg/feature9.svg";
import feature10 from "../Assets/Svg/feature10.svg";

const Features = () => {
  return (
    <div className=" pb-10 pt-36  ">
      <div className="container w-11/12 mx-auto">
        <div className="relative mt-2 mb-5">
          <p className="title-feat-page"></p>
        </div>

        <p className="mb-14 pt-6 fomt-medium text-3xl text-center">
          What we offer
        </p>
        <div className=" grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div>
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
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last">
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
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div>
            <img src={feature3} className="h-full w-full" alt="feature1" />
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
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last">
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
        <div className=" grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div>
            <img src={feature5} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Independent Modules And Interface
            </h1>
            <p className="text-xl mt-8 text-[#575765]">
              Users are sectioned into holistic modules; each user can access a
              tailored dashboard comprising different features and
              functionality. The interfaces are categorized into Students,
              Parents, Lecturers, Administration, Stakeholders, Bursary,
              Prospective Students, and Alumni.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last">
            <img src={feature6} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left  md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Audio And Video Conferencing Tool
            </h1>
            <p className="text-xl mt-8 text-[#575765] ">
              Unify has advanced e-learning automated features that connect the
              students with lecturers beyond the walls of the classroom making
              it a borderless learning platform for schools.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div>
            <img src={feature7} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">
              {" "}
              Registration Module For Prospective Students
            </h1>
            <p className="text-xl mt-8 text-[#575765]">
              Unify Caters to Online Admission Applications and Tracking.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last">
            <img src={feature8} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">Income And Expense Reports</h1>
            <p className="text-xl mt-8 text-[#575765]">
              Income and Expense reports can be generated to ensure all payments
              and receivables are transparent. ​​Summary reports of the entire
              monetary transactions that are done for your institutes can be
              viewed at a go using this feature which makes several tasks easier
              and saves you valuable time and money.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div>
            <img src={feature9} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Best Financing App To Save Your Money{" "}
            </h1>
            <p className="text-xl mt-8 text-[#575765]">
              For every successful payment, the student is issued a receipt and
              every receipt has a unique transaction ID that can be verified and
              cleared at the examination hall .This will completely eliminate
              forgery or duplication of receipts by students.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 items-center md:gap-28 gap-8 md:mb-20 mb-8">
          <div className="md:order-last">
            <img src={feature10} className="h-full w-full" alt="feature1" />
          </div>
          <div className="text-center md:text-left md:ml-[72px]">
            <h1 className="text-xl font-medium">
              Audit Report Of All User Activities{" "}
            </h1>
            <p className="text-xl mt-8 text-[#575765]">
              Audit logs of users activities can be spooled off the platform for
              easy reference{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
