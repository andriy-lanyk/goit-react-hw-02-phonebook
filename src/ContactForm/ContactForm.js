import React, { Component } from "react";
import PropTypes from "prop-types";

import { Form, Label, Btn } from "./ContactForm.styles";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  getValue = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.props.submit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleChange}>
        <Label>
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
        </Label>
        <Label>
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
        </Label>
        <Btn type="submit">Add contact</Btn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ContactForm;
