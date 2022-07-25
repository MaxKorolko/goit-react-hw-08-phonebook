import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import Loader from './Loader/Loader';

const ContactsPage = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "contacts" */)
);

const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "register" */)
);

const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "login" */)
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
