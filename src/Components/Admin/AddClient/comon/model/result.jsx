import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const Result = ({ modelShow, HandleModel, children, handleSaveClient }) => {
  return (
    <Dialog
      header="Add Client"
      visible={modelShow}
      style={{ width: "65vw" }}
      onHide={() => HandleModel("Hide")}
      position="center"
      dismissableMask={true}
      footer={
        <div>
          <Button
            onClick={() => {
              handleSaveClient();
            }}
            label="Save Client"
            className="p-button-raised p-button-success"
            icon="pi pi-check pi-spin"
          />
        </div>
      }
    >
      {children}
    </Dialog>
  );
};

export default Result;
