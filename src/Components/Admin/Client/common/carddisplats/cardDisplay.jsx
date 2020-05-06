import React from "react";
import { Card } from "primereact/card";

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

const CardDisplay = ({ card }) => {
  return (
    <Card
      className={getClass(card.blocked)}
      title={`${card.Num_Carte}`}
      footer={null}
    >
      {getSubTitle(card.blocked)}
    </Card>
  );
};

export default CardDisplay;
