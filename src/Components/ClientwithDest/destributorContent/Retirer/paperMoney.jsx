import React from "react";
import ten from "./papers/10Dt.png";
import twenty from "./papers/20Dt.png";

const PaperMoney = ({ money, addWithdraw }) => {
  return (
    <img
      alt="paper"
      src={money === 20 ? twenty : ten}
      className="img-thumbnail paperMoney"
      onClick={() => addWithdraw(money)}
    />
  );
};

export default PaperMoney;
