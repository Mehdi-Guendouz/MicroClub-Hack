import bannerImage from "../assets/CreateAccout.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrowImg from "../assets/arrow.svg";
import nextArrow from "../assets/nextArrow.svg";
import confirmProc from "../assets/confirmProc.svg";

export const SignUp = () => {
  const [Section, setSection] = useState(false);
  const OnHandleSubmit = (data) => {
    console.log(data);
    console.log(Company);
  };
  return (
    <section className="flex items-center justify-center tracking-tight overflow-hidden ">
      <div className="h-[100vh] w-[50%]">
        <img
          src={bannerImage}
          className="h-full w-full"
          alt="bannerAccoutCover"
        />
      </div>
      <div className="w-[50%] h-[100vh]  flex justify-center ">
        {!Section ? (
          <div
            className="w-[80%] m-auto flex flex-col items-center text-[#301E52]
          font-semibold gap-y-[2rem] "
          >
            <center className="text-[30px]">
              <strong>Logo</strong>
            </center>
            <h2 className="text-[30px]">Create an Account</h2>
            <form
              action=""
              className="flex items-center flex-col h-full gap-y-8 "
            >
              <div className="w-full flex items-center gap-x-9">
                <input
                  type="text"
                  placeholder="First name"
                  name="FirstName"
                  id="FirstName"
                  className="w-full outline-none border border-solid border-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="LastName"
                  id="LastName"
                  className="w-full outline-none border border-solid border-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full outline-none border border-solid border-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
              />
              <div className="flex w-full items-center gap-x-9">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full outline-none border border-solid border-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                />
                <input
                  type="password"
                  name="confirmPassowrd"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full outline-none border border-solid border-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                />
              </div>
              <div className="w-full flex items-center justify-between">
                <Link
                  to="/signIn"
                  className="text-[#703EDC] underline text-base"
                >
                  Sign In?
                </Link>
                <button
                  type="submit"
                  className="text-white bg-[#703EDC] capitalize rounded-[64px] border border-solid
              border-[#C9C3C3] px-[25px] py-[10px] text-[20px] flex items-center gap-x-2 "
                >
                  Next
                  <img src={nextArrow} alt="" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full h-[100vh]  flex items-center justify-center  ">
            <div className="w-[80%] m-auto flex flex-col gap-y-[2rem]">
              <center className="text-[30px]">
                <strong>Logo</strong>
              </center>
              <h2 className="text-[30px]">Complete Subscription</h2>
              <form
                action=""
                className="flex items-center flex-col h-full gap-y-8 "
              >
                <input
                  type="text"
                  id="company name"
                  name="company name"
                  placeholder="Company name"
                  className="w-full border border-solid border-[#C9C3C3] rounded-xl
                  px-[23px] py-[13.5px] placeholder:text-[#C9C3C3] outline-none "
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                />
                <select
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                  name="selectorProduct"
                  id="selectorProduct"
                  className="w-full outline-none border border-solid border-[#C9C3C3] 
                  px-[23px] py-[13.5px] rounded-xl "
                >
                  <option value="--- Select business ---">
                    --- Select business ---
                  </option>
                  <option value="LapTops">Laptops</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Watches">Watches</option>
                </select>
                <select
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                  name="selectorCity"
                  id="selectorCity"
                  className="w-full outline-none border border-solid border-[#C9C3C3] 
                  px-[23px] py-[13.5px] rounded-xl "
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
              <div className="w-full flex items-center justify-between">
                <div
                  onClick={() => {
                    setSection(!Section);
                  }}
                  className="cursor-pointer flex gap-x-1 text-[#703EDC] text-base"
                >
                  <img src={arrowImg} alt="arrowImg " />
                  Back
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#703EDC] capitalize rounded-[64px] border border-solid
              border-[#C9C3C3] px-[25px] py-[10px] text-[20px] flex items-center gap-x-2 "
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/dashbord");
                  }}
                >
                  Confirm
                  <img src={confirmProc} alt="" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
