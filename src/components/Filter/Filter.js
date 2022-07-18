import { useDispatch } from 'react-redux';

import s from './Filter.module.css';
import { filterContacts } from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        id="filter"
        onChange={e => dispatch(filterContacts(e.target.value))}
      ></input>
    </label>
  );
}
