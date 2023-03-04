import React from 'react'
import { RegionElement } from './RegionElement'

const Region = () => {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-wrap justify-between basis-[32%]">
      <RegionElement wilaya={"alger"} percentage={"50.4"} />
      <RegionElement wilaya={"alger"} percentage={"50.4"} />
      <RegionElement wilaya={"alger"} percentage={"50.4"} />
      <RegionElement wilaya={"alger"} percentage={"50.4"} />
      <RegionElement wilaya={"alger"} percentage={"50.4"} />
      <RegionElement wilaya={"alger"} percentage={"50.4"} />
    </div>
  );
}

export default Region