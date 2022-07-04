import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export default function Contacts({ contacts, onDeleteContacts }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {name}&#32;:&#32;{number}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
