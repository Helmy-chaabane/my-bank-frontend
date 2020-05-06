import React from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
const Charts = ({ color, title, date, tables, subcolor }) => {
  const data = {
    labels: [0, ...tables.date],
    datasets: [
      {
        label: title,
        data: [0, ...tables.percent],
        fill: true,
        backgroundColor: color,
        borderColor: subcolor,
      },
    ],
  };

  const getSubTitle = () => {
    return <p className="subtitle_acc">Date(y/m) : {date}</p>;
  };
  return (
    <Card title={title}>
      {getSubTitle()}
      <Chart
        type="line"
        data={data}
        options={{
          animation: {
            duration: 5000,
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "%",
                  position: "top",
                  fontColor: color,
                },
                ticks: {
                  beginAtZero: true,
                  max: 100,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Days",
                  position: "right",
                  fontColor: color,

                  fontWeight: "bold",
                },
                ticks: {
                  beginAtZero: true,
                  max: 31,
                },
              },
            ],
          },
        }}
      />
    </Card>
  );
};

export default Charts;
