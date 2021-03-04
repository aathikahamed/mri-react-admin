import React from "react";
import { Line } from "react-chartjs-2";
import Title from "../Utils/Title";

const data = {
  labels: [
    "10/04/2018",
    "10/05/2018",
    "10/09/2018",
    "10/10/2018",
    "10/11/2018",
    "10/12/2018",
    "10/13/2018",
    "10/14/2018",
    "10/15/2018",
  ],
  datasets: [
    {
      label: "$ Revenue",
      data: [22, 19, 27, 23, 22, 24, 17, 25, 19],
      fill: false,
      borderColor: "#3f51b5",
    },
  ],
};

export default function Chart() {
  return (
    <React.Fragment>
      <Title>This month Income</Title>
      <div style={{ height: "100%" }}>
        <Line data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </React.Fragment>
  );
}
