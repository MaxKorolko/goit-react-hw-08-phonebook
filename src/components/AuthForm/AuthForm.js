import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './AuthForm.module.css';

export default function AuthForm({ handleSubmit, registration }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (registration) {
      handleSubmit({ name, email, password });
    } else {
      handleSubmit({ email, password });
    }
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.authContainer}>
      <form className={s.form} onSubmit={onSubmit}>
        {registration && (
          <label className={s.label}>
            Name*
            <input
              className={s.input}
              type="text"
              required
              autoComplete="off"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        )}
        <label className={s.label}>
          Email*
          <input
            className={s.input}
            type="email"
            required
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={s.label}>
          Password*
          <input
            className={s.input}
            type="password"
            required
            autoComplete="off"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <p className={s.text}>* required fields </p>
        <div className={s.wrap}>
          <button className={s.btn} type="submit">
            {registration ? 'Sing Up' : 'Sing In'}
          </button>
          <Link className={s.link} to={registration ? '/login' : '/register'}>
            {registration ? 'Sing In' : 'Sing Up'}
          </Link>
        </div>
      </form>
    </div>
  );
}
