import React from "react";
import { Button } from "primereact/button";
import NewAccount from "./newAccount";

const AccountFooter = ({ setModelShow, saveNewAccount, Solde }) => {
  return (
    <div className="foot">
      <Button
        label="New Account"
        icon="pi pi-check"
        className="p-button p-button-success m-1"
        onClick={() => {
          setModelShow(
            true,
            <NewAccount
              setModelShow={setModelShow}
              saveNewAccount={saveNewAccount}
              Solde={Solde}
            />
          );
        }}
      />
    </div>
  );
};

export default AccountFooter;
