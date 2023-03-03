import { useState } from "react";
import bannerImage from "../assets/CreateAccout.png";

export const SignIn = () => {
  const [Email, setEamil] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = { Email, Password };
    console.log(data);
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
        <div className="w-[80%] m-auto flex flex-col gap-y-[2rem] ">
          <center className="text-[30px]">
            <strong>Logo</strong>
          </center>
          <h2 className="text-[30px]">Create an Account</h2>
          <form
            action=""
            className="flex items-center flex-col h-full gap-y-8 "
            onSubmit={() => handleSubmit()}
          >
            <input
              type="email"
              name="email"
              className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
              placeholder="Email"
              onChange={(e) => setEamil(e.target.value)}
            />
            <input
              type="password"
              name="password"
              className="w-full outline-none
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-[#703EDC] capitalize rounded-xl border border-solid
              border-[#C9C3C3] px-[25px] py-[10px] text-[20px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
