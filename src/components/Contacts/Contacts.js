import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';

import s from './Contacts.module.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul className={s.list}>
      {getVisibleContacts().map(({ id, name, number }) => {
        return (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {name}&#32;:&#32;{number}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
