import React from "react";
import { Calendar } from "primereact/calendar";

const Calender = ({ value, name, handleChangeClient, error }) => {
  const classNames = () => {
    if (error) return { boxShadow: "3px 3px red " };
  };
  return (
    <Calendar
      style={classNames()}
      onChange={(e) => handleChangeClient(name, e.value)}
      placeholder="date de naissance"
      yearRange="1980:2060"
      id="Cp-calendar"
      monthNavigator={true}
      yearNavigator={true}
      value={value}
    />
  );
};

export default Calender;
