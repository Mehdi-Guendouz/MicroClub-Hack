import React from "react";
import { options } from "../staticData/sidebar";
import premium from "../assets/icons/gold.svg";

export const Sidebar = () => {
  let useage = 1.4  ; 
  let porcentage = Math.floor((1.5 * 100) / 2) + "%";
  return (
    <div className="basis-[23%] bg-[#703EDC]  h-[100vh] flex flex-col  justify-between rounded-r-[20px] sticky top-0 left-0 ">
      <div>{/* <img src={logo} /> */}</div>
      <div className="flex flex-col gap-5">
        {options.map((Element) => {
          return (
            <a className=" p-4 grid gridsidebar text-left gap-4 text-white font-bold hover:bg-[#FE8057]">
              <img src={Element.icon} className="cols-span-1 " />
              <h3 className=" text-xl">{Element.name}</h3>
            </a>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 mb-11 p-4">
        <div className="flex flex-col gap-2 w-[90%] ">
          <div
            className={`bg-[#D9D9D9] w-full h-[11px] rounded-xl after:w-[${porcentage}] after:bg-[#FCD44D] after:h-5 after:block overflow-hidden`}
          ></div>
          <p className="font-bold text-2xl text-white">
            <span className="text-[#FCD44D]">1.30 GO</span> /2.00 GO
          </p>
        </div>
        <button className="flex gap-3 items-center text-white text-xl font-bold bg-[#FE8057] p-3 rounded-[75px] hover:bg-white hover:text-[#FE8057]">
          <img src={premium} /> Go to Premium
        </button>
      </div>
    </div>
  );
};
