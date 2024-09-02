import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import logo from '../../images/logo.png';

const Layout = () => {
  return (
    <>
      <header className={css.headerSection}>
        <div className={css.header}>
          <div className={css.headerLogo}>
            <img
              className={css.headerLogoImage}
              src={logo}
              alt="logo"
              width="31"
              height="31"
            />
            stellar<span className={css.headerTitle}>likes</span>
          </div>
          <nav className={css.headerNav}>
            <Link className={css.headerNavLink} to="/">
              Buy TikTok <span className={css.headerLikes}>Likes</span>
            </Link>
            <span className={css.decorator}></span>
            <Link className={css.headerNavLink} to="/">
              Buy TikTok <span className={css.headerFollowers}>Followers</span>
            </Link>
            <span className={css.decorator}></span>
            <Link className={css.headerNavLink} to="/">
              Buy TikTok <span className={css.headerViews}>Views</span>
            </Link>
          </nav>
        </div>
      </header>
      <main className={css.main}></main>
    </>
  );
};

export default Layout;
