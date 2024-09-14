import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import TikTokFollowersPage from 'pages/TikTokFollowersPage/TikTokFollowersPage';
import TikTokLikesPage from 'pages/TikTokLikesPage/TikTokLikesPage';
import TikTokViewsPage from 'pages/TikTokViewsPage/TikTokViewsPage';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import GetStarted from 'pages/GetStarted/GetStartedPage';
import Checkout from 'pages/Checkout/CheckoutPage';
import SelectPost from './SelectPost/SelectPost';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const MoviesDetails = lazy(() => import('../pages/MovieDetails/MoviesDetails'));
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* TikTok Followers*/}
          <Route path="tikTokFollowers" element={<TikTokFollowersPage />} />
          <Route path="tikTokFollowers/checkout" element={<Checkout />} />

          {/* TikTok Likes */}
          <Route path="tikTokLikes" element={<TikTokLikesPage />} />
          <Route path="tikTokLikes/getStarted" element={<GetStarted />} />
          <Route path="selectPost" element={<SelectPost />} />

          {/* TikTok Views */}
          <Route path="tikTokViews" element={<TikTokViewsPage />} />
          <Route path="tikTokViews/getStarted" element={<GetStarted />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}
