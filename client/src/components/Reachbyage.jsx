import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const Reachebyage = ({ chartdata }) => {
  return (
    <div className="bg-white p-5 rounded-xl basis-[32%]">
      <div className="flex justify-between">
        <h3>Reached by age</h3>
      </div>
      <Pie data={chartdata} />
    </div>
  );
};
