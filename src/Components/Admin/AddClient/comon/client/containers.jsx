import React from "react";
import Container from "./container";

const Containers = ({ items, title, ...rest }) => {
  return (
    <div className="addC-containers">
      <h4>{title}</h4>
      <div className="p-grid p-fluid">
        {items.map((item) => {
          return (
            <Container key={item} name={item} length={items.length} {...rest} />
          );
        })}
      </div>
    </div>
  );
};

export default Containers;
