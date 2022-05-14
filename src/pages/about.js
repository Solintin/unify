import React from "react";

const about = () => {
  return (
    <div className=" py-24 ">
      <div className="container w-11/12 mx-auto md:px-20 ">
        <h1 className="text-[40px] font-medium mb-7 text-center">About Us</h1>

        <p className="text-[#2F2D37] text-xl mb-7">
          C-One is a technology-driven company, incorporated with the primary
          objective of providing start-ups with technology, business support,
          and fund-raising opportunities to advance, accelerate and support
          growth initiatives.
        </p>
        <h1 className="text-[36px] font-medium mb-7">Mission</h1>
        <div className="space-y-4">
          <p>
            To redefine business growth at all stages using its portfolio of
            brands to provide bespoke solutions/services that focus on
            community, technology, education, and investment.
          </p>
          <p>
            To harness and combine the power of technology, community, and
            investment to provide innovative solutions to emerging businesses.
          </p>
          <p>
            To improve people’s lives through meaningful technological
            innovation and support to help you make a difference.
          </p>
        </div>
        <h1 className="text-[36px] font-medium my-7">Vision</h1>
        <div className="space-y-4">
          <p>
            To reshape the future of businesses in all stages through
            technological integration.
          </p>
          <p>
            To provide exceptional technology solutions to every business idea.
          </p>
          <p>
            To disrupt the start-up space by providing exceptional tech-driven
            and community-oriented solutions to basic problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
