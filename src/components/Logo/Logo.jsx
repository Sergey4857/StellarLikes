import css from './Logo.module.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <div className={css.Logo}>
        <img className={css.LogoImage} src={logo} alt="logo" />
        stellar<span className={css.Title}>likes</span>
      </div>
    </Link>
  );
};

export default Logo;
