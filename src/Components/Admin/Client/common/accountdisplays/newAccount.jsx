import React from "react";
import { Button } from "primereact/button";

const NewAccount = ({ setModelShow, saveNewAccount, Solde }) => {
  return (
    <div className="container newAccount">
      <h5>Before you start, here some of our terms :</h5>

      <h6>- The new accounts balances start with 100 DT</h6>
      <h6>
        - Any account that have less then 30 DT will get{" "}
        <span style={{ color: "red", fontSize: 23 }}> blocked</span> and
        unblocked if it reach 50 DT
      </h6>

      <div className="p-inputgroup">
        <input defaultValue="100" type="number" ref={Solde} />
        <span className="p-inputgroup-addon">
          <i className="pi pi-money-bill"></i>
        </span>
      </div>

      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button p-button-success m-1"
        onClick={() => {
          saveNewAccount();
        }}
      />
      <Button
        label="Back"
        icon="pi pi-spinner"
        className="p-button p-button-primary m-1"
        onClick={() => {
          setModelShow(false);
        }}
      />
    </div>
  );
};

export default NewAccount;
