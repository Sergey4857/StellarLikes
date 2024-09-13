import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import css from './TikTokLikesPage.module.css';
import tikTokLikes from '../../icons/tiktokLikes.svg';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import TikTokLikes from './TikTokLikes';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';

const TikTokLikesPage = () => {
  const [tiktoklikes, setTiktoklikes] = useState([
    {
      quantity: 100,
      percent: '30%',
      price: 2.99,
      oldPrice: 4.99,
      savings: 2.01,
      active: true,
    },
    {
      quantity: 250,
      percent: '40%',
      price: 3.99,
      oldPrice: 6.99,
      savings: 3.01,
      active: false,
    },
    {
      quantity: 500,
      percent: '50%',
      price: 4.99,
      oldPrice: 8.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 1000,
      percent: '65%',
      price: 7.99,
      oldPrice: 8.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 2500,
      percent: '70%',
      price: 15.99,
      oldPrice: 18.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 5000,
      percent: '75%',
      price: 25.99,
      oldPrice: 28.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 10000,
      percent: '80%',
      price: 35.99,
      oldPrice: 38.99,
      savings: 2.01,
      active: false,
    },
    {
      quantity: 20000,
      percent: '85%',
      price: 45.99,
      oldPrice: 48.99,
      savings: 2.01,
      active: false,
    },
  ]);
  const [showCustomQuantity, setShowCustomQuantity] = useState(false);
  const [showPackages, setShowPackages] = useState(true);

  const [selectedPrice, setSelectedPrice] = useState(tiktoklikes[0]);
  const toggleLikes = index => {
    setTiktoklikes(
      tiktoklikes.map((likes, i) => {
        return {
          ...likes,
          active: i === index,
        };
      })
    );
    setSelectedPrice(tiktoklikes[index]);
  };

  return (
    <>
      <Outlet />
      <section className={css.buyLikes}>
        <div className={css.buyLikesTitle}>
          Buy TikTok <span className="pinkText">Likes</span>
          <img
            className={css.buyLikesImg}
            src={tikTokLikes}
            alt="buyLikesImg"
          />
          with Instant Delivery
        </div>
        <p className={css.buyLikesText}>
          We offer top-notch quality TikTok likes at the best prices! Check our
          deals below, choose best likes package and make an order now!
        </p>
        <div className={css.buyLikesBenefits}>
          <div className={css.buyLikesBenefit}>24/7 support</div>
          <div className={css.buyLikesBenefit}>Quick Delivery Start</div>
          <div className={css.buyLikesBenefit}>No password required</div>
        </div>

        {showPackages && (
          <div className={css.buyLikesCustomWrap}>
            <div
              className={css.buyLikesCustomLink}
              to=""
              onClick={() => {
                setShowCustomQuantity(true);
                setShowPackages(false);
              }}
            >
              Custom Quantity
            </div>
          </div>
        )}

        {showCustomQuantity && (
          <div className={css.buyLikesCustomWrap}>
            <div
              className={css.buyLikesCustomLink}
              to=""
              onClick={() => {
                setShowCustomQuantity(false);
                setShowPackages(true);
              }}
            >
              Packages
            </div>
          </div>
        )}

        {showPackages && (
          <div className={css.buyLikesQuantityBlock}>
            {tiktoklikes.map((data, index) => (
              <TikTokLikes
                data={data}
                index={index}
                key={index}
                toggleLikes={toggleLikes}
                color="violet"
              />
            ))}
          </div>
        )}

        {showCustomQuantity && <CustomQuantity color="purple" />}
        <div className={css.priceBlock}>
          <div className={css.priceContent}>
            <div className={css.priceWrap}>
              <div className={css.mainPrice}>${selectedPrice.price}</div>
              <div className={css.oldPrice}>${selectedPrice.oldPrice}</div>
            </div>
            <div className={css.savings}>
              You’re saving{' '}
              <span className={css.savingsPrice}>${selectedPrice.savings}</span>
            </div>
          </div>
          <Link className={css.buyLink} to="/tikTokLikes/getStarted">
            Buy Now
          </Link>
        </div>
      </section>
      <Benefits />
      <Rating />
      <Features />
      <Customers />
      <FaqBlock />
    </>
  );
};

export default TikTokLikesPage;
