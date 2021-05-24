import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const data = {
  labels: [
    "JavaScript",
    "React",
    "Redux",
    "Context API",
    "MongoDB",
    "MySQL",
    "RESTful API",
    "Express",
    "Node",
    "jQuery",
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [80, 85, 80, 80, 85, 80, 85, 90, 90, 85],
      backgroundColor: function (labels) {
        return "rgba(139, 99, 75, 0.3)";
      },
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return value + "%";
          },
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.xLabel + "%";
      },
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <div className="">
      <h2 className="text-bg about-label">Technologies</h2>
    </div>
    <HorizontalBar data={data} options={options} />
  </>
);

export default HorizontalBarChart;
