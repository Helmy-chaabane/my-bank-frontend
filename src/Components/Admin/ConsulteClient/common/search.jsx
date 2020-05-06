import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Search = ({ searchby, handleInput, handleDropDown, selectedSearch }) => {
  const items = [
    { label: "CIN", value: "cin" },
    { label: "Name", value: "nom" },
    { label: "SurName", value: "prenom" },
    { label: "City", value: "adresse" },
    { label: "Email", value: "email" },
    { label: "Phone", value: "telephone" },
  ];
  return (
    <div className="search m-1">
      <Dropdown
        style={{ width: "200px" }}
        onChange={(e) => {
          handleDropDown(e.value);
        }}
        value={selectedSearch}
        options={items}
      />
      <InputText
        value={searchby}
        className="m-1"
        keyfilter="alphanum"
        style={{ width: "250px" }}
        placeholder="Search"
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
