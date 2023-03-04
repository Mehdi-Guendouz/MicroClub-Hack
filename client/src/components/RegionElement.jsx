import React from 'react'

export const RegionElement = ({wilaya,percentage}) => {
  const r = 32 ; 
  return (
    <div className="min-w-[49%] flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-xl">{wilaya}</p>
        <p className="text-[#979797]">{percentage}%</p>
      </div>
      <div
        className={`w-full h-[11px] bg-[#EFF3F9]  rounded-xl after:h-3 after:absolute relative after:w-[100%] after:bg-black overflow-hidden `}
      ></div>
    </div>
  );
}
