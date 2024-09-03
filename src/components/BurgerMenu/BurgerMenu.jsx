import { createPortal } from 'react-dom';

import css from './BurgerMenu.module.css';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const burgerRoot = document.querySelector('#burger-root');

  return createPortal(
    <div className={css.BurgerNavWrap}>
      <div className={css.BurgerNav}>
        <Link className={css.burgerNavLink} to="/">
          Home
        </Link>
        <Link className={css.burgerNavLink} to="/">
          Reviews
        </Link>
        <Link className={css.burgerNavLink} to="/">
          TikTok Video Downloader
        </Link>
        <Link className={css.burgerNavLink} to="/">
          TikTok Story Viewer
        </Link>
        <Link className={css.burgerNavLink} to="/">
          Live Support
        </Link>
        <Link className={css.burgerNavLink} to="/">
          Privacy Policy
        </Link>
        <Link className={css.burgerNavLink} to="/">
          Terms of Use
        </Link>
      </div>
    </div>,
    burgerRoot
  );
}
