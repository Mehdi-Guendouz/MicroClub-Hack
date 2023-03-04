import React from "react";
import seemore from "../assets/icons/seemore.svg";
import up from "../assets/icons/up.svg";

const Cards = ({ color, Title, growth, info }) => {
  return (
    <div
      className={` bg-[${color}] basis-[32%] box-shadow   text-white rounded-[13.7px] p-4 flex flex-col gap-[2.5rem]`}
    >
      <div className="flex justify-between">
        <p className="text-3xl font-bold capitalize">{Title}</p>
        <img src={seemore} />
      </div>
      <div className="flex justify-between">
        <p>{info}</p>
        <div>
          <p className="flex gap-1">
            +{growth}% <img src={up} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
