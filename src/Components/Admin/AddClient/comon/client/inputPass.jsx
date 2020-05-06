import React from "react";
import { Password } from "primereact/password";

const InputPass = ({ value, handleChangeClient, name, length, error }) => {
  const classNames = () => {
    if (error) return { boxShadow: "3px 3px red " };
  };
  return (
    <Password
      style={classNames()}
      minLength={length}
      onChange={(e) => handleChangeClient(name, e.target.value)}
      tooltip={"at least 12 letters and no ^<>*!%&{}<>@ "}
      tooltipOptions={{ position: "bottom", event: "focus" }}
      value={value}
      feedback={false}
      placeholder={name}
      name={name}
      keyfilter={/^[^<>*!%&{}<>@]+$/}
    />
  );
};

export default InputPass;
