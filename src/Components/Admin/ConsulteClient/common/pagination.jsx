import React from "react";
import { SelectButton } from "primereact/selectbutton";
const Pagination = ({ pages, currentIndex, handleIndex }) => {
  return (
    <div className="pagination">
      <SelectButton
        value={pages[currentIndex] && pages[currentIndex].value}
        options={pages}
        onChange={(e) => handleIndex(e.value)}
      />
    </div>
  );
};

export default Pagination;
