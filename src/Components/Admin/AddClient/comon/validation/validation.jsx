import React from "react";
import validate from "./validator";
import { Button } from "primereact/button";
const Validation = ({ client, account, card, handleErrors, HandleModel }) => {
  const handleValidation = () => {
    const { clientErrors, accountErrors, cardErrors } = validate.errorDitector(
      client,
      account,
      card
    );

    if (!clientErrors && !accountErrors && !cardErrors) HandleModel("Show");
    else {
      var index = 0;
      if (clientErrors) index = 0;
      else if (accountErrors) index = 1;
      else index = 2;
      handleErrors(clientErrors, accountErrors, cardErrors, index);
    }
  };

  return (
    <div className="container">
      <h3>Confirmation</h3>
      <div className="Acc-disc">
        <h5>
          - Before you confirm, Please check your informations and your
          <span style={{ color: "blue", fontSize: 26 }}> passwords</span>
        </h5>
        <h5>- The client can change his card or account password online</h5>
        <h5>
          - In case of loosing the card, the Client can block he's card online
          and request for a new one
        </h5>

        <h5>
          - The client can change his account password using his email In case
          he forgot his ancien one
        </h5>
      </div>
      <div className="confirmation">
        <Button
          label="Save Client"
          icon="pi pi-check"
          iconPos="left"
          className="p-button-raised p-button-success"
          onClick={() => {
            handleValidation();
          }}
        />
      </div>
    </div>
  );
};

export default Validation;
