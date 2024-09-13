import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import css from './TikTokFollowers.module.css';
import tikTokFollowersIcon from '../../icons/tiktokFolowers.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TikTokFollowers from './TikTokFollowers';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';

const TikTokFollowersPage = () => {
  const [tiktokFollowers, setTiktokFollowers] = useState([
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

  const [selectedPrice, setSelectedPrice] = useState(tiktokFollowers[0]);
  const toggleFollowers = index => {
    setTiktokFollowers(
      tiktokFollowers.map((Followers, i) => {
        return {
          ...Followers,
          active: i === index,
        };
      })
    );
    setSelectedPrice(tiktokFollowers[index]);
  };

  return (
    <>
      <section className={css.buyFollowers}>
        <div className={css.buyFollowersTitle}>
          Buy TikTok <span className="orangeText">Followers</span>
          <img
            className={css.buyFollowersImg}
            src={tikTokFollowersIcon}
            alt="buyFollowersImg"
          />
          with Instant Delivery
        </div>
        <div className={css.buyFollowersWrapper}>
          <p className={css.buyFollowersText}>
            We offer top-notch quality TikTok Followers at the best prices!
            Check our deals below, choose best Followers package and make an
            order now!
          </p>

          <div className={css.buyFollowersBenefits}>
            <div className={css.buyFollowersBenefit}>24/7 support</div>
            <div className={css.buyFollowersBenefit}>Quick Delivery Start</div>
            <div className={css.buyFollowersBenefit}>No password required</div>
          </div>

          {showPackages && (
            <div className={css.buyFollowersCustomWrap}>
              <div
                className={css.buyFollowersCustomLink}
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
            <div className={css.buyFollowersCustomWrap}>
              <div
                className={css.buyFollowersCustomLink}
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
            <div className={css.buyFollowersQuantityBlock}>
              {tiktokFollowers.map((data, index) => (
                <TikTokFollowers
                  data={data}
                  index={index}
                  key={index}
                  toggleFollowers={toggleFollowers}
                  color="violet"
                />
              ))}
            </div>
          )}

          {showCustomQuantity && (
            <CustomQuantity
              blockColor="orange"
              textColor="orangeText"
              discountColor="orangeDiscount"
            />
          )}
          <div className={css.priceBlock}>
            <div className={css.priceContent}>
              <div className={css.priceWrap}>
                <div className={css.mainPrice}>${selectedPrice.price}</div>
                <div className={css.oldPrice}>${selectedPrice.oldPrice}</div>
              </div>
              <div className={css.savings}>
                You’re saving{' '}
                <span className={css.savingsPrice}>
                  ${selectedPrice.savings}
                </span>
              </div>
            </div>
            <Link className={css.buyLink} to="/tikTokFollowers/checkout">
              Buy Now
            </Link>
          </div>
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

export default TikTokFollowersPage;
