import React from "react";
import { offers } from "../staticData/offers";
import check from "../assets/check.svg";
import dolar from "../assets/dolar.svg";

export const Offers = () => {
  return (
    <div className="#D0D1DE">
      <div className="max-w-[1360px] m-auto flex flex-col gap-[4rem]">
        <h2 className="text-4xl text-center">Our Offers</h2>
        <div className="flex justify-center gap-[3rem] ">
          {offers.map((Elements) => {
            return (
              <div className="basis-[22%] gap-6 flex flex-col bg-[#FEF4D8] cards rounded-[20px] p-6 h-fit">
                <div className="flex flex-col">
                  <p className="text-3xl font-bold">{Elements.plan}</p>
                  <p>
                    $
                    <span className="text-xl font-bold">{Elements.price}</span>
                    /Year
                  </p>
                </div>
                <hr className="border line border-black " />
                <div className="flex flex-col gap-3">
                  {Elements.features.map((Elements) => {
                    return (
                      <div className="flex gap-3">
                        <img src={check} />
                        <p>{Elements}</p>
                      </div>
                    );
                  })}
                  <a className="p-3 rounded-full mt-[23px] bg-[#301E52] getnow justify-center text-white text-xl font-bold flex gap-4">
                    Get now <img src={dolar} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
