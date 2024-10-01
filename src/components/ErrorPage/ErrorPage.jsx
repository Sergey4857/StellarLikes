import { Link } from 'react-router-dom';
import css from './ErrorPage.module.css';
import icon404 from '../../icons/404.svg';

const ErrorPage = () => {
  return (
    <section className={css.errorWrap}>
      <div className={css.error}>
        <img src={icon404} alt="" className={css.errorImg} />
        <h1 className={css.errorTitle}>Oh no, something went wrong</h1>
        <p className={css.errorText}>
          You have lost in the middle of the space. Please go back to he home
          page station.
        </p>
        <Link className={css.errorLink} to="/">
          Bring me home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
