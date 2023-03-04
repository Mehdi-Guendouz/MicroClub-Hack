import { Link } from "react-router-dom";
import { PagesLinks } from "../staticData/NavPages";
import BtnStarted from "../assets/BtnStaretd.svg";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between max-w-[1390px] py-4 m-auto  ">
        <a>
          <img src={logo} />
        </a>
        <div className="h-full ml-2 ">
          <ul className="flex items-center justify-center h-full gap-16 ">
            {PagesLinks.map((pageLink) => (
              <li
                className=" text-[24px] font-medium "
                key={pageLink}
              >
                <a href={`#${pageLink}`}>{pageLink}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center box-shadow  py-4 px-5 rounded-full bg-white box-shadow-btn text-[#703edc] font-bold text-[20px] ">
          <a className="flex gap-3 ">
            Get Started
            <img className="ImageBtn" src={BtnStarted} alt="" />
          </a>
        </div>
      </nav>
    </header>
  );
};
