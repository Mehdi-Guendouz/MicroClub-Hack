import BtnStarted2 from "../assets/BtnStarted2.svg";
import Layer_1 from "../assets/Layer_1.png";
import GroupeImage from "../assets/Group 2181.png";

export const BodySection = () => {
  return (
    <section className=" w-full mt-[4rem]" id="Home">
      <div className="max-w-[1360px] m-auto flex">
        <div className="flex  items-start justify-center flex-col gap-6 translate-x-10">
          <h1 className="text-[54px] min-w-fit font-bold">
            Unlocking insights <br /> through simplified data <br />
            visualization.
          </h1>
          <p className="text-[#414141] text-[20px] font-normal ">
            Empowering businesses with intuitive data <br /> visualization tools
            to unlock valuable insights
          </p>
          <a className="flex box-shadow gap-4 text-[20px] font-bold px-10 py-3 bg-[#703EDC] text-white rounded-full my-2">
            Discover
            <img src={BtnStarted2} alt="arrow" />
          </a>
          <div className="ImageTarget">
            <img src={Layer_1} alt="targetImage" />
          </div>
        </div>
        <div className="w-[50%]">
          <img src={GroupeImage} alt="" className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
};
