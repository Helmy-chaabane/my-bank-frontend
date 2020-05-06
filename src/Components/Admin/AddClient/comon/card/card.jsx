import React from "react";
import CreditCard from "./creditCard";
import { Password } from "primereact/password";

const Card = ({ card, name, handleChangeCard, email, errors }) => {
  const classNames = () => {
    if (errors && errors["passCode"]) return { boxShadow: "3px 3px red " };
  };

  return (
    <div className="container">
      <h3>New Card</h3>
      <CreditCard number={card.Num_Carte} email={email} name={name} />
      <div className="card-bottom">
        <div className="row">
          <div className=" col-5">
            <span>
              <h3>
                Status: <span style={{ color: "green" }}>Active</span>
              </h3>
            </span>
          </div>

          <div className="p-inputgroup col-6 ">
            <label style={{ fontSize: 25, width: "100%" }}>
              Card password (8 digits):{" "}
            </label>
            <span className="p-inputgroup-addon">
              <i className="pi pi-key"></i>
            </span>

            <Password
              onChange={(e) => {
                handleChangeCard(e.target.value);
              }}
              style={classNames()}
              maxLength={8}
              value={card.passCode}
              placeholder="Code password"
              tooltip={"8 digits please"}
              keyfilter="int"
              feedback={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
