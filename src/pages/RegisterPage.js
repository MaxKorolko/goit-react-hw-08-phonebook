import AuthForm from 'components/AuthForm/AuthForm';
import { useCreateUserMutation } from '../redux/contacts/contactsAPI';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/contacts/contacts-actions';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const [createUser] = useCreateUserMutation();

  const handleSubmit = data => {
    createUser(data)
      .unwrap()
      .then(payload => {
        dispatch(setUser(payload));
      });
  };

  return (
    <main>
      <AuthForm registration={true} handleSubmit={handleSubmit} />
    </main>
  );
}
