import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const Reachebyage = ({ chartdata }) => {
  return (
    <div className="bg-white p-5 rounded-xl basis-[32%] box-shadow flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Reached by age</h2>
      </div>
      <Pie data={chartdata} />
    </div>
  );
};
