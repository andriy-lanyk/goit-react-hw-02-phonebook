import React from "react";
import { Label } from "./Filter.styles";

const Filter = ({ change, filter }) => {
  function getFilterValue(e) {
    const { value } = e.currentTarget;
    change(value);
  }

  return (
    <Label>
      Find contacts by Name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterValue}
      />
    </Label>
  );
};

export default Filter;
