import bannerImage from "../assets/CreateAccout.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewUser } from "../staticData/SignUpUserSchema";
import { Link } from "react-router-dom";
import { useState } from "react";
import arrowImg from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [Section, setSection] = useState(false);
  const [Company, setCompany] = useState({});
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(NewUser),
  });
  const OnHandleSubmit = (data) => {
    console.log(data);
    console.log(Company);
  };
  return (
    <div className="flex items-center justify-center tracking-tight overflow-hidden ">
      <div className="h-[100vh] w-[50%]">
        <img
          src={bannerImage}
          className="h-full w-full"
          alt="bannerAccoutCover"
        />
      </div>
      <div className="w-[50%] h-[100vh]  flex justify-center ">
        {!Section ? (
          <div className="w-[80%] m-auto flex flex-col gap-y-[2rem] ">
            <center className="text-[30px]">
              <strong>Logo</strong>
            </center>
            <h2 className="text-[30px]">Create an Account</h2>
            <form
              action=""
              className="flex items-center flex-col h-full gap-y-8 "
              onSubmit={handleSubmit(OnHandleSubmit)}
            >
              <div className="w-full flex items-center gap-x-9">
                <input
                  type="text"
                  placeholder="First name"
                  name="FirstName"
                  id="FirstName"
                  className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                  {...register("FirstName")}
                  style={{
                    border: formState.errors.FirstName?.message
                      ? "1px solid red"
                      : "1px solid #C9C3C3",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="LastName"
                  id="LastName"
                  className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                  {...register("LastName")}
                  style={{
                    border: formState.errors.FirstName?.message
                      ? "1px solid red"
                      : "1px solid #C9C3C3",
                  }}
                />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                {...register("email")}
                style={{
                  border: formState.errors.FirstName?.message
                    ? "1px solid red"
                    : "1px solid #C9C3C3",
                }}
              />
              <div className="flex w-full items-center gap-x-9">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                  {...register("password")}
                  style={{
                    border: formState.errors.FirstName?.message
                      ? "1px solid red"
                      : "1px solid #C9C3C3",
                  }}
                />
                <input
                  type="password"
                  name="confirmPassowrd"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                  {...register("confirmPassword")}
                  style={{
                    border: formState.errors.FirstName?.message
                      ? "1px solid red"
                      : "1px solid #C9C3C3",
                  }}
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
                  className="text-white bg-[#703EDC] capitalize rounded-xl border border-solid
              border-[#C9C3C3] px-[25px] py-[10px] text-[20px]"
                  onClick={(e) => {
                    e.preventDefault();
                    setSection(!Section);
                  }}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full h-[100vh]  flex items-center  ">
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
                    setCompany({
                      Name: e.target.value,
                    });
                  }}
                />
                <select
                  onChange={(e) => {
                    e.preventDefault();
                    setCompany({
                      Product: e.target.value,
                    });
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
                    setCompany({
                      City: e.target.value,
                    });
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
                  className="cursor-pointer flex gap-x-1 text-[#703EDC] underline text-base"
                >
                  <img src={arrowImg} alt="arrowImg " />
                  Back
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#703EDC] capitalize rounded-xl border border-solid
                border-[#C9C3C3] px-[25px] py-[10px] text-[20px]"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/dashbord");
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
