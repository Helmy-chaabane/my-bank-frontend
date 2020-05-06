import React from "react";
import { Steps } from "primereact/steps";
const Step = (props) => {
  return (
    <Steps model={props.titles} activeIndex={props.index} readOnly={true} />
  );
};

export default Step;
