import React from "react";
import auth from "../../../../../services/authService";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import Moment from "react-moment";
const AccountDisplay = ({
  accounts,
  color,
  handleBlockAccount,
  handleDeleteAccount,
  setModelShow,
  title,
  code,
  handleChangeCode,
}) => {
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
  const footer = (block, account) => {
    return (
      <div className="foot">
        <Button
          icon={`pi ${block ? "pi-lock-open" : "pi-lock"} `}
          label={block ? "Unblock" : "Block"}
          className="p-button p-button-secondary m-1"
          onClick={() => handleBlockAccount(account)}
        />
        {accounts.length > 1 && (
          <Button
            icon="pi pi-times"
            label="Delete"
            className="p-button p-button-danger m-1"
            onClick={() =>
              setModelShow(
                true,
                <div className="deleteing ">
                  <h3>Are you Sure you wanna delete this account</h3>
                  <Button
                    label="Back"
                    icon="pi pi-spinner"
                    className="p-button p-button-primary m-1"
                    onClick={() => {
                      setModelShow(false);
                    }}
                  />
                  <Button
                    label="Delete Client"
                    icon="pi pi-times"
                    className="p-button p-button-danger"
                    onClick={() => {
                      handleDeleteAccount(account._id);
                    }}
                  />
                </div>
              )
            }
          />
        )}
      </div>
    );
  };

  const getClass = (block) => {
    if (block) return "m-1 card_acc_blocked";
    return "m-1 card_acc_unblocked";
  };

  const wantedAccounts = () => {
    const wanted = accounts.filter((account) => {
      return account.account_num.toString().startsWith(code);
    });
    return wanted;
  };
  const getmax = (solde) => {
    if (solde > 200000) return 1000000;
    if (solde > 20000) return 200000;
    if (solde > 2000) return 20000;
    else return 2000;
  };

  return (
    <Fieldset legend={title} toggleable={true}>
      <InputText
        keyfilter="pnum"
        placeholder="Search for account"
        value={code}
        onChange={(e) => handleChangeCode(e.target.value)}
        className="m-3"
      />

      <div className="p-grid p-align-center">
        {accounts &&
          wantedAccounts().map((account) => {
            return (
              <Card
                key={account._id}
                className={getClass(account.blocked)}
                title={account.account_num.toString()}
                footer={
                  auth.getCurrentUser().role === "Admin"
                    ? footer(account.blocked, account)
                    : null
                }
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
          })}
      </div>
    </Fieldset>
  );
};

export default AccountDisplay;
