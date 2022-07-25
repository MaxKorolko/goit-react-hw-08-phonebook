import { useDispatch, useSelector } from 'react-redux';

import s from './Filter.module.css';
import { filterContacts } from '../../redux/contacts/contacts-actions';

export default function Filter() {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
}
