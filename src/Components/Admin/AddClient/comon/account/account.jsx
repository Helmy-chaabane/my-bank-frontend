import React from "react";
import Terms from "./terms";
import { InputNumber } from "primereact/inputnumber";

const Account = ({ solde, handleChangeAccount, errors }) => {
  const classNames = () => {
    if (errors && errors["solde"]) return { boxShadow: "3px 3px red " };
  };
  return (
    <React.Fragment>
      <h3>Your first account </h3>
      <div className="container">
        <Terms />
        <div className="row">
          <span className="balance">Start your balance </span>
          <InputNumber
            style={classNames()}
            className="m-3"
            placeholder="Balance"
            name="solde"
            value={solde}
            min={0}
            mode="currency"
            currency="TND"
            tooltip="Move the curser so you can easily type"
            onChange={(e) => handleChangeAccount(e.target.value)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
