import css from './Logo.module.css';
import logo from '../../icons/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className={css.LogoWrap}>
      <div className={css.Logo}>
        <img className={css.LogoImage} src={logo} alt="logo" />
        stellar<span className={css.Title}>likes</span>
      </div>
    </Link>
  );
};

export default Logo;
