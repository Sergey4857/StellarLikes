import css from './Logo.module.css';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <>
      <div className={css.Logo}>
        <img className={css.LogoImage} src={logo} alt="logo" />
        stellar<span className={css.Title}>likes</span>
      </div>
    </>
  );
};

export default Logo;
