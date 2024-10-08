import { Link } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import { useEffect, useState } from 'react';
import BurgerBtn from 'components/BurgerBtn/BurgerBtn';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import RatingStars from '../../icons/rating-stars.svg';
import { CSSTransition } from 'react-transition-group';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 895);
  };

  const [openedModal, setOpenedModal] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={css.headerSection}>
      <div className={css.header}>
        <Logo />
        {isDesktop && (
          <nav className={css.headerNav}>
            <Link className={css.headerNavLink} to="/">
              Buy TikTok <span className={css.headerLikes}>Likes</span>
            </Link>
            <span className={css.decorator}></span>
            <Link className={css.headerNavLink} to="/tikTokFollowers">
              Buy TikTok <span className={css.headerFollowers}>Followers</span>
            </Link>
            <span className={css.decorator}></span>

            <Link className={css.headerNavLink} to="/tikTokViews">
              Buy TikTok <span className={css.headerViews}>Views</span>
            </Link>
            <span className={css.decorator}></span>
            <Link className={css.headerNavLink} to="/aboutUs">
              About Us
            </Link>
            <span className={css.decorator}></span>
            <Link className={css.headerNavLink} to="/contactUs">
              Contact Us
            </Link>
          </nav>
        )}
        {!isDesktop && (
          <div className={css.rating}>
            <img
              className={css.ratingImg}
              src={RatingStars}
              alt="rating-stars"
            />
            <span className={css.ratingSpan}>5.0</span>
          </div>
        )}
        {!isDesktop && (
          <BurgerBtn
            setOpenedModal={setOpenedModal}
            openedModal={openedModal}
          />
        )}

        <CSSTransition
          in={openedModal}
          timeout={300}
          classNames="burger-menu"
          unmountOnExit
        >
          <BurgerMenu setOpenedModal={setOpenedModal}></BurgerMenu>
        </CSSTransition>
      </div>
    </header>
  );
};

export default Header;
