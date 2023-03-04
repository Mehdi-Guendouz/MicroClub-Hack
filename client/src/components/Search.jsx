import React from "react";
import search from "../assets/icons/search.svg" ; 

export const Search = () => {
  return (
    <div>
      <label htmlFor="search" className="flex shadow-search bg-white w-fit py-2 px-4 rounded-[8.4px] gap-3">
        <img src={search} />
        <input className=" focus:outline-none " type="text" name="search" id="search" placeholder="Search"/>
      </label>
    </div>
  );
};
