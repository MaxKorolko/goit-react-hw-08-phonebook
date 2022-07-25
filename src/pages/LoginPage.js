import AuthForm from 'components/AuthForm/AuthForm';
import { useLoginUserMutation } from 'redux/contacts/contactsAPI';
import { useDispatch } from 'react-redux';

import { setUser } from 'redux/contacts/contacts-actions';

export default function LoginPage() {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = data => {
    loginUser(data)
      .unwrap()
      .then(payload => {
        dispatch(setUser(payload));
      });
  };

  return (
    <main>
      <AuthForm registration={false} handleSubmit={handleSubmit} />
    </main>
  );
}
