import React from "react";
import Result from "./result";
import Moment from "react-moment";
import { InputText } from "primereact/inputtext";

const Model = ({
  client,
  account,
  card,
  HandleModel,
  modelShow,
  showpassword,
  showpasscode,
  HandlePass,
  handleSaveClient,
}) => {
  const getItems = (act) => {
    return Object.keys(act).filter((item) => item !== "owner");
  };
  const getIcon = (item) => {
    if (item === "password") {
      if (showpassword) return "";
      else return "-slash";
    }

    if (showpasscode) return "";
    else return "-slash";
  };

  const getType = (item) => {
    if (item === "password") {
      if (showpassword) return "text";
      else return "password";
    }

    if (showpasscode) return "text";
    else return "password";
  };

  const displayItems = (item) => {
    if (item === "adresse")
      return (
        <React.Fragment>
          <span className="ModelT"> {item} : </span>
          <span className="ModelL">
            {client[item].Rue} {client[item].Ville} {client[item].Code_postale}
          </span>
        </React.Fragment>
      );
    if (item === "naissance")
      return (
        <React.Fragment>
          <span className="ModelT"> {item} : </span>
          <span className="ModelL">
            <Moment format="YYYY/MM/DD">{client[item]}</Moment>
          </span>
        </React.Fragment>
      );
    if (item === "password" || item === "passCode")
      return (
        <React.Fragment>
          <span className="ModelT"> {item} : </span>
          <div className="p-inputgroup">
            <InputText
              value={client[item] || card[item]}
              type={getType(item)}
              readOnly
            />
            <span
              className={
                "p-inputgroup-addon pi pi-eye" + getIcon(item) + "  modelP"
              }
              onClick={() => HandlePass(item)}
            />
          </div>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <span className="ModelT"> {item} : </span>
        <span className="ModelL">
          {client[item] || account[item] || card[item]}
        </span>
      </React.Fragment>
    );
  };
  return (
    <Result
      HandleModel={HandleModel}
      modelShow={modelShow}
      handleSaveClient={handleSaveClient}
    >
      <div className="container">
        <h4>Client</h4>
        <div className="row">
          {getItems(client).map((item) => (
            <div key={item} className="col-4 m-3">
              {displayItems(item)}
            </div>
          ))}
        </div>
        <h3>Account</h3>
        <div className="row">
          {getItems(account).map((item) => (
            <div key={item} className="col-2 m-4">
              {displayItems(item)}
            </div>
          ))}
        </div>
        <h3>Card</h3>
        <div className="row">
          {getItems(card).map((item) => (
            <div key={item} className="col-3 m-2">
              {displayItems(item)}
            </div>
          ))}
        </div>
      </div>
    </Result>
  );
};

export default Model;
