import React from "react";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

const Transfer = ({ transfer, exchange, handleExchange, handleTransfer }) => {
  return (
    <div className="transfer">
      <div>
        <span className="m-2">How much you wanna transfer :</span>
        <InputNumber
          placeholder="Balance"
          name="solde"
          value={exchange}
          min={0}
          mode="currency"
          currency="TND"
          tooltip=">= the balance"
          onChange={(e) => handleExchange(e.target.value)}
        />
      </div>
      <Button
        style={{ width: "30%" }}
        label="Transfer"
        className="btn p-button-raised p-button-success btn-lg font-weight-bold"
        disabled={transfer}
        onClick={() => handleTransfer()}
      />
    </div>
  );
};

export default Transfer;
