import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Container from './Container/Container';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  checkContact = newContact => {
    const { contacts } = this.state;
    return contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addContact = newContact => {
    if (this.checkContact(newContact)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    const verifiedNewContact = { id: nanoid(), ...newContact };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, verifiedNewContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Section tittle="Phonebook">
          <Form onRiseContact={this.addContact} />
        </Section>

        <Section tittle="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContacts={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
