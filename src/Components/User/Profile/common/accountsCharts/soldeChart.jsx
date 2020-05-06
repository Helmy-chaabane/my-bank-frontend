import React from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import Moment from "react-moment";

const SoldeChart = ({ account, color }) => {
  const getdata = (solde) => {
    return {
      labels: [""],
      datasets: [
        {
          label: "Balance",
          backgroundColor: color,
          data: [solde],
        },
      ],
    };
  };

  const getmax = (solde) => {
    if (solde > 200000) return 1000000;
    if (solde > 20000) return 200000;
    if (solde > 2000) return 20000;
    else return 2000;
  };
  const getClass = (block) => {
    if (block) return "m-1 card_acc_blocked";
    return "m-1 card_acc_unblocked";
  };

  const getSubTitle = (bloc, date) => {
    return (
      <p className="subtitle_acc">
        Status:
        {bloc ? (
          <label style={{ color: "red" }}>Blocked</label>
        ) : (
          <label style={{ color: "green" }}>Active</label>
        )}
        <label className="foot">
          Started at:
          <Moment format="DD MMM YYYY">{date.toString()}</Moment>
        </label>
      </p>
    );
  };

  return (
    <Card
      key={account._id}
      className={getClass(account.blocked)}
      title={account.account_num.toString()}
    >
      {getSubTitle(account.blocked, account.createdAt)}
      <Chart
        type="bar"
        data={getdata(account.solde)}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: getmax(account.solde),
                },
              },
            ],
          },
        }}
      />
    </Card>
  );
};

export default SoldeChart;
