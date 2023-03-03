import { Link } from "react-router-dom";
import { PagesLinks } from "../staticData/NavPages";
import BtnStarted from "../assets/BtnStaretd.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around bg-red-600">
      <div className="LogoHolder">
        <p>Logo</p>
      </div>
      <div className="HolderLinks">
        <ul className="PagesLink">
          {PagesLinks.map((pageLink) => (
            <li className="LinkHolder group " key={pageLink}>
              <Link to={`/${pageLink}`}>{pageLink}</Link>
              <div className="Line"></div>
            </li>
          ))}
        </ul>
        <div className="LineLink"></div>
      </div>
      <div className="Btn">
        <p>Get Started</p>
        <img className="ImageBtn" src={BtnStarted} alt="" />
      </div>
    </nav>
  );
};
