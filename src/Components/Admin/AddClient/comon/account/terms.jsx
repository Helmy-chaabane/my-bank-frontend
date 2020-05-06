import React from "react";

const Terms = () => {
  return (
    <div className="Acc-disc">
      <h5>Before you start, here some of our terms :</h5>

      <h6>
        - The client can have more then{" "}
        <span style={{ color: "green", fontSize: 26 }}> one</span> account
      </h6>
      <h6>- The new accounts balances start with 100 DT</h6>
      <h6>
        - Any account that have less then 30 DT will get{" "}
        <span style={{ color: "red", fontSize: 23 }}> blocked</span> and
        unblocked if it reach 50 DT
      </h6>
      <h6>
        - The client can choose to
        <span style={{ color: "red", fontSize: 23 }}> block</span> an account
        after an administration confirmation
      </h6>
    </div>
  );
};

export default Terms;
