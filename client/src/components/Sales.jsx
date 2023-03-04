import React from "react";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import leftarrow from "../assets/icons/leftarrow.svg";
import rightarrow from "../assets/icons/rightarrow.svg";

export const Sales = ({ chartdata }) => {

  let currentYear = new Date().getFullYear();

  const [year, Setyear] = useState(currentYear);
  return (
    <div className="bg-white p-5 rounded-xl">
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
      <Line data={chartdata}  />
    </div>
  );
};
