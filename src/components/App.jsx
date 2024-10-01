import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

import TikTokFollowersPage from 'pages/TikTokFollowersPage/TikTokFollowersPage';
import TikTokLikesPage from 'pages/TikTokLikesPage/TikTokLikesPage';
import TikTokViewsPage from 'pages/TikTokViewsPage/TikTokViewsPage';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import GetStarted from 'pages/GetStarted/GetStartedPage';
import Checkout from 'pages/Checkout/CheckoutPage';
import SelectPost from './SelectPost/SelectPost';
import ContactUs from 'pages/ContactUs/ContactUs';
import AboutUs from 'pages/AboutUs/AboutUs';
import ErrorPage from './ErrorPage/ErrorPage';

// import { useEffect, useState } from 'react';
// import FetchAllProductData from 'Api/FetchTiktokLikes';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const MoviesDetails = lazy(() => import('../pages/MovieDetails/MoviesDetails'));

export default function App() {
  // const [tiktokLikesData, setTiktokLikesData] = useState(null);
  // const [tiktokViewsData, setTiktokViewsData] = useState(null);

  //request 1 times at week
  // const fetchDataIfNeeded = async () => {
  //   const lastFetch = localStorage.getItem('lastFetchDate');
  //   const now = new Date();

  //   if (!lastFetch || now - new Date(lastFetch) > 7 * 24 * 60 * 60 * 1000) {
  //     await FetchAllProductData(setTiktokLikesData, setTiktokViewsData);
  //     localStorage.setItem('lastFetchDate', now);
  //   }
  // };
  // fetchDataIfNeeded();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await FetchAllProductData(setTiktokLikesData, setTiktokViewsData);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* TikTok Likes */}
          <Route index element={<TikTokLikesPage />} />

          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/getStarted/selectPost" element={<SelectPost />} />

          {/* TikTok Followers*/}
          <Route path="tikTokFollowers" element={<TikTokFollowersPage />} />
          <Route path="tikTokFollowers/getStarted" element={<GetStarted />} />
          <Route path="tikTokFollowers/checkout" element={<Checkout />} />

          {/* TikTok Views */}
          <Route path="tikTokViews" element={<TikTokViewsPage />} />
          <Route path="tikTokViews/getStarted" element={<GetStarted />} />
          <Route
            path="tikTokViews/getStarted/selectPost"
            element={<SelectPost />}
          />

          <Route path="/checkout" element={<Checkout />} />

          {/* AboutUs */}
          <Route path="AboutUs" element={<AboutUs />} />

          {/* AboutUs */}
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
