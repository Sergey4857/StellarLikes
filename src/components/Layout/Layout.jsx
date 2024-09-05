import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

import Header from '../Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
