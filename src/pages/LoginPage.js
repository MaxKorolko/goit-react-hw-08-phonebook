import AuthForm from 'components/AuthForm/AuthForm';
import { useLoginUserMutation } from 'redux/contacts/contactsAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/contacts/contacts-actions';

export default function LoginPage() {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = data => {
    console.log(data);
    loginUser(data)
      .unwrap()
      .then(payload => {
        dispatch(setUser(payload));
        // navigate('/', { replace: true });
      });
  };

  return (
    <main>
      <AuthForm registration={false} handleSubmit={handleSubmit} />
    </main>
  );
}
