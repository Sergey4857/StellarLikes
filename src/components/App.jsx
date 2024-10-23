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
import Reviews from 'pages/Reviews/Reviews';
import OrderConfirmation from 'pages/OrderConfirmation/OrderConfirmation';

import { useEffect, useState } from 'react';
import FetchAllProductData from 'Api/FetchAllProductData';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import PrivacyPolicy from 'pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from 'pages/TermsOfUse/TermsOfUse';

export default function App() {
  const [tiktokLikesData, setTiktokLikesData] = useState(null);
  const [tiktokViewsData, setTiktokViewsData] = useState(null);
  const [tiktokFollowersData, setTiktokFollowersData] = useState(null);
  const [tiktokFreeLikesData, setFreeTiktokLikesData] = useState(null);
  const [tiktokFreeViewsData, setFreeTiktokViewsData] = useState(null);
  const [tiktokFreeFollowersData, setFreeTiktokFollowersData] = useState(null);

  console.log(tiktokFreeFollowersData);

  // request 1 times at week
  const fetchDataIfNeeded = async () => {
    const lastFetch = localStorage.getItem('lastFetchDate');
    const now = new Date();

    if (!lastFetch || now - new Date(lastFetch) > 7 * 24 * 60 * 60 * 1000) {
      await FetchAllProductData(setTiktokLikesData, setTiktokViewsData);
      localStorage.setItem('lastFetchDate', now);
    }
  };
  fetchDataIfNeeded();

  useEffect(() => {
    const fetchData = async () => {
      await FetchAllProductData(
        setTiktokLikesData,
        setTiktokViewsData,
        setTiktokFollowersData,
        setFreeTiktokLikesData,
        setFreeTiktokViewsData,
        setFreeTiktokFollowersData
      );
    };
    fetchData();
  }, []);

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* TikTok Likes */}
          <Route
            index
            element={
              <TikTokLikesPage
                tiktokLikesData={tiktokLikesData}
                tiktokFreeLikesData={tiktokFreeLikesData}
              />
            }
          />
          <Route
            path="/getStarted"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'price',
                  'productService',
                  'quantity',
                  'productId',
                ]}
                redirectTo="/"
              >
                <GetStarted />
              </ProtectedRoute>
            }
          />

          <Route
            path="/getStarted/selectPost"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'country',
                  'customLink',
                  'quantity',
                  'productId',
                  'price',
                  'productService',
                  'quantity',
                  'productId',
                  'uniqueId',
                  'userEmail',
                ]}
                redirectTo="/"
              >
                <SelectPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="buy-tiktok-followers"
            element={
              <TikTokFollowersPage
                tiktokFollowersData={tiktokFollowersData}
                tiktokFreeFollowersData={tiktokFreeFollowersData}
              />
            }
          />
          <Route
            path="buy-tiktok-followers/getStarted"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'price',
                  'productService',
                  'quantity',
                  'productId',
                ]}
                redirectTo="/"
              >
                <GetStarted />
              </ProtectedRoute>
            }
          />
          <Route
            path="buy-tiktok-followers/checkout"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'price',
                  'productService',
                  'quantity',
                  'productId',
                  'userEmail',
                  'customLink',
                  'shop_name',
                ]}
                redirectTo="/"
              >
                <Checkout />
              </ProtectedRoute>
            }
          />
          {/* TikTok Views */}
          <Route
            path="buy-tiktok-views"
            element={
              <TikTokViewsPage
                tiktokViewsData={tiktokViewsData}
                tiktokFreeViewsData={tiktokFreeViewsData}
              />
            }
          />

          <Route
            path="buy-tiktok-views/getStarted"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'quantity',
                  'productId',
                  'price',
                  'productService',
                ]}
                redirectTo="/"
              >
                <GetStarted />
              </ProtectedRoute>
            }
          />
          <Route
            path="buy-tiktok-views/getStarted/selectPost"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'price',
                  'productService',
                  'quantity',
                  'productId',
                  'uniqueId',
                  'userInfo',
                  'userEmail',
                  'customLink',
                  'shop_name',
                ]}
                redirectTo="/"
              >
                <SelectPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="freeLikes/selectPost"
            element={
              <ProtectedRoute
                requiredStateKeys={
                  [
                    // 'country',
                    // 'customLink',
                    // 'quantity',
                    // 'productId',
                    // 'price',
                    // 'productService',
                    // 'quantity',
                    // 'productId',
                    // 'uniqueId',
                    // 'userEmail',
                  ]
                }
                redirectTo="/"
              >
                <SelectPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="freeViews/selectPost"
            element={
              <ProtectedRoute
                requiredStateKeys={
                  [
                    // 'country',
                    // 'customLink',
                    // 'quantity',
                    // 'productId',
                    // 'price',
                    // 'productService',
                    // 'quantity',
                    // 'productId',
                    // 'uniqueId',
                    // 'userEmail',
                  ]
                }
                redirectTo="/"
              >
                <SelectPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute
                requiredStateKeys={[
                  'price',
                  'productService',
                  'quantity',
                  'productId',
                  'userEmail',
                  'customLink',
                  'shop_name',
                ]}
                redirectTo="/"
              >
                <Checkout />
              </ProtectedRoute>
            }
          />
          {/* AboutUs */}
          <Route path="about" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="/OrderConfirmation/" element={<OrderConfirmation />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="TermsOfUse" element={<TermsOfUse />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
