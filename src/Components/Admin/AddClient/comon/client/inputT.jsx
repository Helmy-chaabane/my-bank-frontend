import React from "react";
import { InputText } from "primereact/inputtext";
const InputT = ({
  name,
  keyF,
  tooltip,
  value,
  handleChangeClient,
  length,
  errors,
}) => {
  const classNames = () => {
    if (errors && errors[name]) return { boxShadow: "3px 3px red " };
  };
  return (
    <InputText
      style={classNames()}
      maxLength={length}
      onChange={(e) => handleChangeClient(name, e.target.value)}
      value={value}
      placeholder={name}
      keyfilter={keyF}
      tooltip={tooltip}
      tooltipOptions={{ position: "bottom", event: "focus" }}
    />
  );
};

export default InputT;
