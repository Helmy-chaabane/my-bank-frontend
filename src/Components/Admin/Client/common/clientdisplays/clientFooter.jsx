import React from "react";
import { Button } from "primereact/button";

const ClientFooter = ({ setModelShow, update, setUpdate, setChange,  handleDeleteClient }) => {
  return (
    <div className="foot">
      {update && (
        <Button
          label="Back"
          icon="pi pi-check"
          className="p-button p-button-primary m-1"
          onClick={() => setUpdate(false)}
        />
      )}
      <Button
        label="Update Client"
        icon="pi pi-cog"
        className="p-button p-button-primary m-1"
        onClick={() => (update ? setChange() : setUpdate())}
      />
      <Button
        label="Delete Client"
        icon="pi pi-times"
        className="p-button p-button-danger"
        onClick={() => {
          setModelShow(
            true,
            <div className="deleteing ">
              <h4>Are you sure you wanna delete this client ?</h4>
              <Button
                label="Back"
                icon="pi pi-spinner"
                className="p-button p-button-primary m-1"
                onClick={() => {
					
                  setModelShow(false);
                }}
              />
              <Button
                label="Delete Client"
                icon="pi pi-times"
                className="p-button p-button-danger"
                onClick={() => {
					handleDeleteClient();
                  setModelShow(false);
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default ClientFooter;
