import React from "react";
import { Button } from "primereact/button";
import { ColorPicker } from "primereact/colorpicker";
const SideBar = ({ setColor, color, show, setShow }) => {
  return (
    <div className=" row sidebar_client">
      <div className="button-side">
        <Button
          icon="pi pi-palette pi-spin side-icon"
          className="p-button p-button button-font"
          style={{ background: color, border: `${color} 2px solid` }}
          onClick={() => {
            setShow();
          }}
        />
      </div>
      <div className="col">
        {show && (
          <div className="color_pick">
            <header>
              <h3 style={{ marginLeft: "15px", color: color }}>
                Play with colors
              </h3>
              <ColorPicker
                style={{ margin: "5%", border: `${color} 2px solid` }}
                inline={true}
                format="hex"
                value={color}
                onChange={(e) => setColor(e.value)}
                defaultColor="#F39C12"
              />
            </header>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
