import { useState } from 'react';

import s from './Form.module.css';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactsAPI';

export default function Form() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setContactName(value);
    }
    if (name === 'number') {
      setPhone(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      data?.some(({ name }) => name.toLowerCase() === contactName.toLowerCase())
    ) {
      reset();
      return alert(`${contactName} is already in contacts`);
    }
    addContact({ name: contactName, phone });
    reset();
  };

  const reset = () => {
    setContactName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={contactName}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
