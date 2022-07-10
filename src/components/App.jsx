import { useState, useEffect } from 'react';

import Filter from './Filter/Filter';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Section from './Section/Section';
import Container from './Container/Container';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const checkContact = newContact =>
    contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

  const changeFilter = event => setFilter(event.currentTarget.value);

  const addContact = newContact => {
    if (checkContact(newContact)) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section tittle="Phonebook">
        <Form onRiseContact={addContact} />
      </Section>

      <Section tittle="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContacts={deleteContact}
        />
      </Section>
    </Container>
  );
}
