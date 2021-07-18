import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container } from "./App.styles";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  getFilter = (value) => {
    this.setState({ filter: value });
  };

  getContact = ({ name, number }) => {
    const { contacts } = this.state;
    const doubleContact = contacts.find((item) => item.name === name);
    if (doubleContact) {
      alert(`${doubleContact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv4(), name, number }],
    }));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((item) => {
        return item.id !== contactId;
      }),
    }));
  };

  resetState = () => {
    return this.setState(
      (prevState) =>
        (prevState = {
          contacts: [...prevState.contacts],
          filter: "",
        })
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm submit={this.getContact} />
        <h2>Contacts</h2>
        <Filter change={this.getFilter} filter={filter} />
        <ContactList
          contacts={contacts}
          visibleContacts={visibleContacts}
          getElement={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
