import React from "react";
import { Dropdown } from "primereact/dropdown";

const InputD = ({ items, name, value, handleChangeClient, error }) => {
  const classNames = () => {
    if (error) return { boxShadow: "3px 3px red " };
  };
  return (
    <Dropdown
      style={classNames()}
      onChange={(e) => handleChangeClient(name, e.target.value)}
      id="Cp_dropdown"
      value={value}
      options={items}
      placeholder={name}
    />
  );
};

export default InputD;
