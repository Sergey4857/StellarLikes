import { createPortal } from 'react-dom';
import css from './BurgerMenu.module.css';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const burgerRoot = document.querySelector('#burger-root');

  return createPortal(
    <div className={css.BurgerNavWrap}>
      <div
        className={css.BurgerNav}
        onClick={() => {
          setOpenedModal(false);
        }}
      >
        <div className={css.burgerFirstBlock}>
          <Link className={css.burgerNavLink} to="/">
            Buy TikTok Likes
          </Link>
          <Link className={css.burgerNavLink} to="/tikTokFollowers">
            Buy TikTok Followers
          </Link>
          <Link className={css.burgerNavLink} to="/tikTokViews">
            Buy TikTok Views
          </Link>
        </div>
        <div className={css.divider}></div>
        <div className={css.burgerSecondBlock}>
          <Link className={css.burgerNavLink} to="/">
            Free TikTok Video Downloader
          </Link>
          <Link className={css.burgerNavLink} to="/">
            Free TIkTok Likes
          </Link>
          <Link className={css.burgerNavLink} to="/">
            Free TikTok Views
          </Link>
          <Link className={css.burgerNavLink} to="/">
            Free TikTok Followers
          </Link>
        </div>
        <div className={css.divider}></div>
        <div className={css.burgerThirdBlock}>
          <Link className={css.burgerNavLink} to="/">
            Privacy Policy
          </Link>
          <Link className={css.burgerNavLink} to="/">
            Terms of Use
          </Link>
          <Link className={css.burgerNavLink} to="/">
            Live Support
          </Link>
        </div>
      </div>
    </div>,
    burgerRoot
  );
}
