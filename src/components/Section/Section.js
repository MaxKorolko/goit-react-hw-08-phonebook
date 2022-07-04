import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ children, tittle }) {
  return (
    <section className={s.section}>
      <h1 className={s.tittle}>{tittle}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  tittle: PropTypes.string,
};
