import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import TikTokFollowersPage from 'pages/TikTokFollowersPage/TikTokFollowersPage';
import TikTokLikesPage from 'pages/TikTokLikesPage/TikTokLikesPage';
import TikTokViewsPage from 'pages/TikTokViewsPage/TikTokViewsPage';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const MoviesDetails = lazy(() => import('../pages/MovieDetails/MoviesDetails'));
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tikTokFollowers" element={<TikTokFollowersPage />} />
          <Route path="tikTokLikes" element={<TikTokLikesPage />} />
          <Route path="tikTokViews" element={<TikTokViewsPage />} />
        </Route>
      </Routes>
    </>
  );
}
