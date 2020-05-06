import React from "react";
import { Button } from "primereact/button";
const CardFooter = ({ setModelShow, block, blockStateCard }) => {
  const InBlock = () => {
    return (
      <div className="deleting">
        <h3>Are you Sure you wanna block the Card</h3>
        <div className="foot">
          <Button
            label="Back"
            icon="pi pi-spinner"
            className="p-button p-button-primary m-1"
            onClick={() => {
              setModelShow(false);
            }}
          />
          <Button
            label="Block"
            icon="pi pi-lock"
            className="p-button p-button-danger m-1"
            onClick={() => {
              blockStateCard();
            }}
          />
        </div>
      </div>
    );
  };

  const InUnblock = () => {
    return (
      <div className="unblock">
        <h3>Are you Sure you wanna unblock the Card</h3>
        <div className="foot">
          <Button
            label="Back"
            icon="pi pi-spinner"
            className="p-button p-button-primary m-1"
            onClick={() => {
              setModelShow(false);
            }}
          />
          <Button
            label="Unblock"
            icon="pi pi-lock-open"
            className="p-button p-button-success m-1"
            onClick={() => {
              blockStateCard();
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="foot">
      <Button
        label={`${block ? "Unblock" : "Block"} `}
        icon={`pi ${block ? "pi-lock-open" : "pi-lock"} `}
        className={`p-button p-button-${block ? "success" : "danger"} m-1`}
        onClick={() => {
          setModelShow(true, block ? InUnblock() : InBlock());
        }}
      />
    </div>
  );
};

export default CardFooter;
