import { Sidebar } from "../components/Sidebar";
import userIcon from "../assets/Ellipse 227.png";
import { useDataLayerValue } from "../config/dataLayer";
import { useState } from "react";

export const USerProfilePage = () => {
  const [{ user }] = useDataLayerValue();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [Product, setProduct] = useState("");
  const [City, setCity] = useState("");
  return (
    <section className="flex h-screen w-screen ">
      <Sidebar />
      <section className="w-[70%] h-full flex justify-center">
        <div className="max-w-[100%] m-auto ">
          <h2 className="text-[#301E52] text-3xl font-semibold ">Profile</h2>
          <br />
          <div className="flex items-start gap-x-20   ">
            <div className="flex items-center flex-col w-[30%] ">
              <img
                src={userIcon}
                className="w-32 h-32 rounded-full"
                alt="UserProfilePic"
              />
              <p className="text-[#4F4F4F] text-[32px]">
                {user?.firstName} {user?.lastName} Basset
              </p>
            </div>
            <div className="w-[90%]">
              <form action="" className="w-full flex flex-col gap-y-2">
                <div className="flex w-full items-center gap-x-9">
                  <input
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    name="LastName"
                    id="LastName"
                    placeholder="LastName"
                    className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="EMail"
                  placeholder="Email"
                  className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                />
                <div className="flex w-full items-center gap-x-9">
                  <input
                    type="password"
                    name="password"
                    id="PAssword"
                    className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                    placeholder="Change Password"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    id="ConFirmPassword"
                    className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                    placeholder="Confirm the new password"
                  />
                </div>
                <input
                  type="text"
                  name="Company"
                  id="CompanyName"
                  placeholder="Company Name"
                  className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                />
                <select
                  name=""
                  id=""
                  className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                >
                  <option value="--- Select business ---">
                    --- Select business ---
                  </option>
                  <option value="LapTops">Laptops</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Watches">Watches</option>
                </select>
                <select
                  name=""
                  id=""
                  className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                >
                  <option value="--- Select City ---">
                    --- Select City ---
                  </option>
                  <option value="Bordj bou arreridj">Bordj bou arreridj</option>
                  <option value="Jijel">Jijel</option>
                  <option value="Tebessa">Tebessa</option>
                  <option value="Tizi Ouzou">Tizi Ouzou</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
