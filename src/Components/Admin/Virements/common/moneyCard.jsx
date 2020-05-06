import React from "react";
import CurrencyFormat from "react-currency-format";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const MoneyCard = ({
  value,
  handleChangeInputs,
  name,
  account,
  user,
  title,
  getUser,
  owner,
  input,
}) => {
  const getClass = (block) => {
    if (block) return "m-1 card_acc_blocked";
    return "m-1 card_acc_unblocked";
  };

  const getSubTitle = (bloc) => {
    return (
      <p className="subtitle_acc">
        Status:
        {bloc ? (
          <label style={{ color: "red" }}>Blocked</label>
        ) : (
          <label style={{ color: "green" }}>Active</label>
        )}
      </p>
    );
  };

  const getfooter = (block) => {
    if (block && name === "looser_acc") {
      return (
        <div className="deleteing">
          {` You cant to tranfer from an Bloked Account (Blocked by admin or less the
          TND 30)`}
        </div>
      );
    } else {
      return <div className="deleteing">Ready to transfer</div>;
    }
  };

  return (
    <React.Fragment>
      <span className="vir_title">{title} </span>
      <div className="p-inputgroup m-2">
        <InputText
          placeholder="Account Number"
          keyfilter="pnum"
          name={input}
          value={value}
          onChange={(e) => handleChangeInputs(e.target, name)}
        />
        <Button
          disabled={account}
          icon="pi pi-search"
          className="p-button-priamry"
          onClick={() => getUser(input, name, owner)}
        />
      </div>

      {account && (
        <Card
          title={"Owner: " + user.prenom + " " + user.nom}
          className={getClass(account.blocked)}
          footer={getfooter(account.blocked)}
        >
          {getSubTitle(account.blocked)}
          <div className="Money_display container">
            Balance:{" "}
            <CurrencyFormat
              value={account.solde}
              displayType={"text"}
              thousandSeparator={true}
              decimalSeparator="."
              allowNegative={false}
              prefix={"TND "}
            />
          </div>
        </Card>
      )}
    </React.Fragment>
  );
};

export default MoneyCard;
