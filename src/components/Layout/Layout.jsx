import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

import Header from '../Header/Header';
import Footer from 'components/Footer/Footer';
import HeroHome from 'components/HeroHome/HeroHome';
import Available from 'components/Available/Available';
import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <HeroHome />
        <Available />
        <Benefits />
        <Rating />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
