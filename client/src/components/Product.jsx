import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import leftarrow from "../assets/icons/leftarrow.svg";
import rightarrow from "../assets/icons/rightarrow.svg";

export const Product = ({ chartdata }) => {

  let currentYear = new Date().getFullYear() ; 

  const [year, Setyear] = useState(currentYear) ; 
  return (
    <div className="bg-white p-5 rounded-xl basis-[32%] flex flex-col gap-[2rem]">
      <div className="flex justify-between">
        <h3>Product</h3>
        <div className="flex gap-1">
          <button>
            <img src={leftarrow} />
          </button>
          <p>{year}</p>
          <button>
            <img src={rightarrow} />
          </button>
        </div>
      </div>
      <Bar data={chartdata}  />
    </div>
  );
};
