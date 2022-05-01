import React from "react";
import "./Component-styles.css";

const Tutorial = () => {
  return (
    <div className="relative ">
      <div className="absolute cream-bg bg-[#F1EBE3] inset-x-0 h-[320px]"></div>
      <div className="absolute top-[230px] video">
        <iframe
        title="Unify educative tutorial workthrough"
        className="md:w-[600px] w-full rounded"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};

export default Tutorial;
