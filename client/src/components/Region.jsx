import React from "react";
import { RegionElement } from "./RegionElement";

const Region = () => {
  return (
    <div className="bg-white box-shadow p-5 rounded-xl flex flex-col gap-7 basis-[32%]">
      <h2 className="font-bold text-2xl">Region</h2>
      <div className="flex flex-wrap justify-between gap-y-8">
        <RegionElement wilaya={"alger"} percentage={"50.4"} />
        <RegionElement wilaya={"alger"} percentage={"50.4"} />
        <RegionElement wilaya={"alger"} percentage={"50.4"} />
        <RegionElement wilaya={"alger"} percentage={"50.4"} />
        <RegionElement wilaya={"alger"} percentage={"50.4"} />
        <RegionElement wilaya={"alger"} percentage={"50.4"} />
      </div>
    </div>
  );
};

export default Region;
