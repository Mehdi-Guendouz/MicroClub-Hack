import { Link } from "react-router-dom";
import { PagesLinks } from "../staticData/NavPages";
import BtnStarted from "../assets/BtnStaretd.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-3">
      <div className="text-[36px] font-bold text-black">
        <p>Logo</p>
      </div>
      <div className="h-full ml-2 ">
        <ul className="flex items-center justify-center h-full gap-16">
          {PagesLinks.map((pageLink) => (
            <li className=" text-[24px] font-medium " key={pageLink}>
              <Link to={`/${pageLink}`}>{pageLink}</Link>
              <div className="Line"></div>
            </li>
          ))}
        </ul>
        <div className="border border-[#DFDFDF] translate-y-7 "></div>
      </div>
      <div className="flex items-center justify-center gap-2 py-4 px-5 rounded-full bg-[#f3f3f3] box-shadow-btn text-[#703edc] font-bold text-[20px] ">
        <p className="">Get Started</p>
        <img className="ImageBtn" src={BtnStarted} alt="" />
      </div>
    </nav>
  );
};
