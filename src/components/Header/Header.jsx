import { Link } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import { useEffect, useState } from 'react';
import BurgerBtn from 'components/BurgerBtn/BurgerBtn';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
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
            <Link className={css.headerNavLink} to="/tikTokLikes">
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
          </nav>
        )}

        {!isDesktop && (
          <BurgerBtn
            setOpenedModal={setOpenedModal}
            openedModal={openedModal}
          />
        )}

        {openedModal && (
          <BurgerMenu
            setOpenedModal={setOpenedModal}
            openedModal={openedModal}
          ></BurgerMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
