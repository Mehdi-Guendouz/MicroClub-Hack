import React from "react";
import { options } from "../staticData/sidebar";
import premium from "../assets/icons/gold.svg";
import { Link } from "react-router-dom";
import logo from '../assets/logo2.svg' ; 

export const Sidebar = () => {

  return (
    <div className="basis-[18%] bg-[#703EDC]  h-[100vh] flex flex-col  justify-between rounded-r-[20px] sticky top-0 left-0 ">
      <div className="pt-4">{<img className="w-full object-contain" src={logo} />}</div>
      <div className="flex flex-col gap-5">
        {options.map((Element) => {
          return (
            <Link
              to={`/${Element.name}`}
              className=" px-4 py-2 grid gridsidebar text-left gap-4 text-white font-bold hover:bg-[#FE8057]"
            >
              <img src={Element.icon} className="cols-span-1 " />
              <h3 className=" text-xl">{Element.name}</h3>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 mb-11 p-4">
        <div className="flex flex-col gap-2 w-[90%] ">
          <div
            className={`bg-[#D9D9D9] w-full h-[11px] rounded-xl after:w-[61%] after:bg-[#FCD44D] after:h-5 after:block overflow-hidden`}
          ></div>
          <p className="font-bold text-2xl text-white">
            <span className="text-[#FCD44D]">1.30 GO</span> /2.00 GO
          </p>
        </div>
        <button className="flex w-[90%] box-shadow-2 justify-center items-center gap-3  text-white text-xl font-bold bg-[#FE8057] p-2 rounded-[75px] hover:bg-white hover:text-[#FE8057]">
          <img src={premium} /> Go to Premium
        </button>
      </div>
    </div>
  );
};
