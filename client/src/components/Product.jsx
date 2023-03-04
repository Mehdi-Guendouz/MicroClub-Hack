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
    <div className="bg-white p-5 rounded-xl basis-[32%] flex flex-col gap-[2rem] box-shadow">
      <div className="flex justify-between flex-col gap-3">
        <h2 className="font-bold text-2xl">Product</h2>
        <div className="flex gap-1">
          <label htmlFor="Date start" className="flex flex-col">
            Date start
            <input
              type="date"
              name="Date strat"
              className="border rounded-lg p-2"
            />
          </label>
          <label htmlFor="Date start" className="flex flex-col">
            Date end
            <input
              type="date"
              name="Date strat"
              className="border rounded-lg p-2"
            />
          </label>
        </div>
      </div>
      <Bar data={chartdata} />
    </div>
  );
};
