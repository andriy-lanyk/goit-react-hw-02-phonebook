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
    const name = e.target.name;
    const value = e.target.value;
    this.setState((state) => (state[name] = value));
  };

  getContact = (e) => {
    e.preventDefault();
    const { contacts } = this.state;
    const doubleContact = contacts.find(
      (item) => item.name === e.target[0].value
    );
    if (doubleContact) {
      alert(`${doubleContact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts, name, number }) => {
      return contacts.push({ id: uuidv4(), name, number });
    });
    this.resetState();
  };

  findContact = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((state) => (state[name] = value));
    this.setState((state) => {
      const arrayOfContacts = [...state.contacts];
      state.contacts = arrayOfContacts.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    });
  };

  deleteContact = (e) => {
    const target = e.target.name;
    console.log("target: ", target);
    this.setState((state) => {
      state.contacts = state.contacts.filter((item) => {
        return item.id !== target;
      });
    });
    console.log(this.state.contacts);
  };

  resetState = () => {
    return this.setState(
      (state) =>
        (state = {
          contacts: [...state.contacts],
          filter: "",
          name: "",
          number: "",
        })
    );
  };

  render() {
    const { name, contacts, number, filter } = this.state;
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
            onChange={this.findContact}
          />
        </label>
        {contacts && (
          <ul>
            {contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}{" "}
                <button name={id} onClick={this.deleteContact}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;
