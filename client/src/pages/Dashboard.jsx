import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Search } from "../components/Search";
import { UserProfileDropDown } from "../components/userDropDown";
import { useState } from "react";
import Cards from "../components/Cards";
import { Product } from "../components/Product";
import { data } from "../staticData/data";
import { Sales } from "../components/Sales";
import { Reachebyage } from "../components/Reachbyage";
import Region from "../components/Region";

export const Dashboard = () => {
  const [header, setHeader] = useState("Statistics");
  const [userdata, Setuserdata] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: data.map((data) => data.userGain),
        backgroundColor: ["#FCD44D", "#703EDC", " #FE8057"],
        lineWidth: 2,
        borderRadius: 15, 
        borderSkipped: false ,
        barThickness: 15 , 
      },
    ],
  });

  return (
    <div className="flex bg-[#F3F3F3] ">
      <Sidebar />
      <div className="basis-[83%] pt-10">
        <div className="flex flex-col gap-8  max-w-[95%] mx-auto bg-inherit w-full">
          <div className="flex justify-between">
            <div className="flex gap-[2rem]">
              <h1 className="text-4xl font-bold text-[#4F4F4F]">{header}</h1>
              <Search />
            </div>
            <UserProfileDropDown />
          </div>
          <div className="flex justify-between">
            <Cards
              color={"#703EDC"}
              Title={"top region"}
              growth={"3"}
              info={"hello hi"}
            />
            <Cards
              color={"#FE8057"}
              Title={"top region"}
              growth={"3"}
              info={"hello hi"}
            />
            <Cards
              color={"#FCD44D"}
              Title={"top region"}
              growth={"3"}
              info={"hello hi"}
            />
          </div>
          <div className="flex  justify-between gap-2">
            <Product chartdata={userdata} />
            <Reachebyage chartdata={userdata} />
            <Region />
          </div>
          <div className="mb-10">
            <Sales chartdata={userdata} />
          </div>
        </div>
      </div>
    </div>
  );
};
