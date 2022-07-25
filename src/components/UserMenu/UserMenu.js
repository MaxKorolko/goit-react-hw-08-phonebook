import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLogoutUserMutation } from 'redux/contacts/contactsAPI';
import { resetUser } from 'redux/contacts/contacts-actions';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(state => state.contactBook.user.name);
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    logoutUser()
      .unwrap()
      .then(() => {
        dispatch(resetUser());
      });
  };

  return (
    <header className={s.header}>
      <p className={s.name}>{name}</p>
      <button className={s.btn} type="button" onClick={handleLogout}>
        Log Out
      </button>
    </header>
  );
}
