import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  getValue = (e) => {
    const name = e.currentTarget.name;
    this.setState({ [name]: e.currentTarget.value });
  };

  getContact = (e) => {
    e.preventDefault();
    const { contacts } = this.state;
    const doubleContact = contacts.find(
      (item) => item.name === e.target[0].value
    );
    if (doubleContact) {
      alert(`${doubleContact.name} is already in contacts`);
      this.resetState();
      return;
    }
    this.setState(({ contacts, name, number }) => ({
      contacts: [...contacts, { id: uuidv4(), name, number }],
    }));
    this.resetState();
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
          name: "",
          number: "",
        })
    );
  };

  render() {
    const { name, contacts, number, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.getContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.getValue}
              value={name}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.getValue}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by Name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={this.getValue}
          />
        </label>
        {contacts && (
          <ul>
            {visibleContacts.map(({ id, name, number }) => (
              <li key={id}>
                <span>
                  {name}: {number}
                </span>
                <button onClick={() => this.deleteContact(id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;
