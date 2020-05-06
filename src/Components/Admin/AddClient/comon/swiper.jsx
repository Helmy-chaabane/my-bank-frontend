import React from "react";
import { Button } from "primereact/button";

const Swiper = ({
  header,
  children,
  currentIndex,
  listLength,
  changeIndex,
}) => {
  const footer = () => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-arrow-left "
          className="m-1"
          onClick={() => moveLeft()}
          disabled={currentIndex === 0}
        />
        <Button
          icon="pi pi-arrow-right"
          onClick={() => moveRight()}
          disabled={currentIndex === listLength - 1}
        />
      </React.Fragment>
    );
  };
  const moveLeft = () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      changeIndex(currentIndex);
    } else return;
  };

  const moveRight = () => {
    if (currentIndex < listLength - 1) {
      currentIndex += 1;
      changeIndex(currentIndex);
    } else return;
  };

  return (
    <div className="addC-C">
      <div className="addC-header">
        <span className="head">{header}</span>
      </div>
      {children}
      <div className="addC-bottom">{footer()}</div>
    </div>
  );
};

export default Swiper;
