import React from "react";
import search from "../assets/icons/search.svg";

export const Search = () => {
  return (
    <div>
      <label
        htmlFor="search"
        className="flex shadow-search bg-white w-fit p-5 rounded-[60px] gap-3"
      >
        <img src={search} />
        <input
          className=" focus:outline-none "
          type="text"
          name="search"
          id="search"
          placeholder="Search"
        />
      </label>
    </div>
  );
};
