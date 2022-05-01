import React from "react";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import HowItwork from "../Components/Hiw.js";
import Partners from "../Components/Partners";
import Tutorial from "../Components/Tutorial";
import Unifyforwho from "../Components/Unifyforwho";

const home = () => {
  return (
    <div className="pt-20 text-black">
      <Hero />
      <Tutorial />
      <Unifyforwho />
      <Features />
      <HowItwork />
      <Partners />
    </div>
  );
};

export default home;
