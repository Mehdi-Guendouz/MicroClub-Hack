import React from "react";
import featureone from "../assets/one.png";
import featuretwo from "../assets/two.png";
import featurethree from "../assets/three.png";
import arrows from '../assets/arrows.svg' ; 

export const Features = () => {
  return (
    <div className="bg-[#703EDC] mt-[3rem] relative py-[5rem]" id="Features">
      <img className="absolute top-[-14%] w-[14%]" src={arrows} />
      <div className="max-w-[1360px] m-auto flex flex-col gap-[3.5rem]">
        <h2 className="text-4xl text-center font-bold">Our Features</h2>
        <div className="flex justify-between text-white text-xl text-center">
          <div className="basis-[28%] flex flex-col gap-9">
            <div>
              <img src={featureone} />
            </div>
            <div>
              <p>
                Our web app provides an easy-to-use platform to manage your
                business data, visualize it in various formats, and analyse it
                to extract insights ."
              </p>
            </div>
          </div>
          <div className="basis-[28%]  flex flex-col gap-5">
            <div>
              <p>
                Our web app leverages the power of artificial intelligence to
                provide you with intelligent recommendations and predictions
                that can help you optimize your business
              </p>
            </div>
            <div>
              <img src={featuretwo} />
            </div>
          </div>
          <div className="basis-[28%]  flex flex-col gap-5">
            <div>
              <img src={featurethree} />
            </div>
            <div>
              <p>
                By combining data management, visualization, and AI
                recommendations and predictions, our web app is designed to help
                you optimize your business in every way possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
