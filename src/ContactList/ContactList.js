import React from "react";
import { Btn, ItemText, Item } from "./ContactListStyles";

const ContactList = ({ contacts, visibleContacts, getElement }) => {
  return (
    contacts && (
      <ul>
        {visibleContacts.map(({ id, name, number }, i) => (
          <Item key={id}>
            <ItemText>
              {`${i + 1})    `}
              {name}: {number}
            </ItemText>
            <Btn type="button" onClick={() => getElement(id)}>
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    )
  );
};

export default ContactList;
