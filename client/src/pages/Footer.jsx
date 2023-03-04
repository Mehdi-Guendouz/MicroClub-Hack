import React from "react";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/Facebook.svg";
import gmail from "../assets/Gmail.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/logo1.svg";

export const Footer = () => {
  return (
    <div className="bg-[#301E52]">
      <div className="max-w-[1360px] m-auto text-white flex justify-between p-4">
        <div className="flex flex-col gap-[1.6rem]">
          <img src={logo} />
          <small>All rights reserved &copy; 2023</small>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-xl">Contact us: </p>
          <a>
            <img src={gmail} />
          </a>
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={instagram} />
          </a>
          <a>
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};
