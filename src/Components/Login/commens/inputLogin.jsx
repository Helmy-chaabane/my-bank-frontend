import React from "react";
import { InputText } from "primereact/inputtext";

const InputLoging = ({ id, name, placeholder, handleChange, length }) => {
  const icon = "pi pi-" + (name === "cin" ? "id-card" : "key");
  const tooltipMes = name === "cin" ? "Enter 8 digits" : "8 letters at most";
  return (
    <div className="login-content-in m-3">
      <div className="p-inputgroup ">
        <span className="p-inputgroup-addon">
          <i className={icon} />
        </span>
        <InputText
          maxLength={length}
          tooltip={tooltipMes}
          tooltipOptions={{ position: "right" }}
          value={id}
          onChange={(e) => handleChange(e)}
          keyfilter={name === "cin" ? "int" : /^[^<>*!]+$/}
          className="login_input"
          autoFocus={name === "cin"}
          type={name}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete={"off"}
        />
      </div>
    </div>
  );
};

export default InputLoging;
