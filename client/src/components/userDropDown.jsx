import { useState } from "react";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../config/dataLayer";
import userProfilePic from "../assets/name.png";

export const UserProfileDropDown = () => {
  const [{ user }] = useDataLayerValue();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className=" relative ">
      <div className="flex items-center gap-x-[11px]" onClick={handleShow}>
        <p className="text-[#4F4F4F] text-xl">
          {user?.firstName} {user?.lastName} Basset
        </p>
        <img
          src={user?.profilePic ? user?.profilePic : userProfilePic}
          className="h-12 w-12 rounded-full"
          alt="userProfilePic"
        />
      </div>
      {show && (
        <div className="w-[20vw] flex bg-white px-[22px] py-[14px] shadow-[0px 4px 5px rgba(0, 0, 0, 0.25)] rounded-lg">
          <ul className="flex flex-col gap-y-1 w-full py-1 px-2 ">
            <li className=" flex items-center gap-x-4 hover:bg-[#F2F2F2] rounded-lg ">
              <Link
                to="/profile/:username"
                className="text-[#4F4F4F] text-base font-meduim px-2 py-1"
              >
                Profile
              </Link>
            </li>
            <li className="flex items-center gap-x-4">
              <Link
                className="text-[#4F4F4F] text-base font-meduim
              hover:bg-[#F2F2F2] rounded-lg px-2 py-1 w-full"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
