import React from "react";
import PaymentCard from "react-payment-card-component";

const CreditCard = ({ email, number, name }) => {
  return (
    <PaymentCard
      id="card"
      bank="itau"
      model="personnalite"
      type="gold"
      cvv={email}
      number={number.toString()}
      expiration={email}
      holderName={name}
      flipped={false}
    />
  );
};

export default CreditCard;
