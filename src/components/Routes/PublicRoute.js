import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  redirect = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(state => state.contactBook.user.isLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  return shouldRedirect ? <Navigate to={redirect} replace /> : children;
}
