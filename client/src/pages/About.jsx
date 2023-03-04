import React from "react";
import arrowabout from "../assets/arrowabout.svg";
import illustrationone from "../assets/illustrationone.png";
import illustratiotwo from "../assets/illustrationtwo.png";

export const About = () => {
  return (
    <div className="w-full bg-[#703EDC] mt-[8rem]">
      <div className="max-w-[1360px] m-auto p-10">
        <h2 className="text-4xl text-center text-white font-bold">About Us</h2>
        <div className="flex flex-col text-white relative">
          <div className="grid grid-cols-2">
            <div className=" col-span-1 relative">
              <img
                className="  absolute top-[-50%] left-[-5%]"
                src={illustrationone}
              />
            </div>
            <div className="col-span-1 px-5 py-[4rem] max-w-[60%]">
              <p className="text-xl">
                At DataLab, we're passionate about helping digital
                entrepreneurship owners succeed. Our platform help creating
                visually stunning and informative dashboards that empower our
                clients to make better-informed decisions.
              </p>
            </div>
          </div>
          <div className="absolute top-[44%] left-[40%]"><img src={arrowabout} /></div>
          <div className="grid grid-cols-2">
            <div className="  px-5 py-[2rem] max-w-[70%] col-span-1">
              <p className="text-xl">
                Our platform allows users to easily upload and manage their
                data. It also includes an AI model that analyzes this data to
                uncover insights and trends that may not be immediately
                apparent, helping users to identify opportunities for growth and
                optimization.
              </p>
            </div>
            <div className="col-span-1 relative">
              <img
                className=" absolute top-[-40%] left-[-5%]"
                src={illustratiotwo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
