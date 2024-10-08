import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import css from './Layout.module.css';

import Header from '../Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  const location = useLocation();

  const getMainClass = () => {
    switch (location.pathname) {
      case '/':
        return css['likes-background']; //
      case '/tikTokLikes':
        return css['likes-background'];
      case '/buy-tiktok-followers':
        return css['followers-background'];
      case '/buy-tiktok-views':
        return css['views-background'];
      default:
        return css['default-background'];
    }
  };
  return (
    <>
      <Header />
      <main className={getMainClass()}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
