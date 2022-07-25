import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children, redirect = '/login' }) {
  const isLoggedIn = useSelector(state => state.contactBook.user.isLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirect} replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
