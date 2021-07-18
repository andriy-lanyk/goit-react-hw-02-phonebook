import React from "react";
import { Label, Message } from "./Filter.styles";

const Filter = ({ change, filter, contacts }) => {
  function getFilterValue(e) {
    const { value } = e.currentTarget;
    change(value);
  }

  return contacts.length !== 0 ? (
    <Label>
      Find contacts by Name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterValue}
      />
    </Label>
  ) : (
    <Message>Your Phonebook don`t have contacts</Message>
  );
};

export default Filter;
