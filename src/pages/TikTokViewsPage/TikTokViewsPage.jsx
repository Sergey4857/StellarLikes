import Benefits from 'components/Benefits/Benefits';
import Rating from 'components/Rating/Rating';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FaqBlock from 'components/Faq/FaqBlock';
import css from './TikTokViews.module.css';
import tikTokViews from '../../icons/tiktokViews.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TikTokViews from './TikTokViews';
import CustomQuantity from 'components/CustomQuantiy/CustomQuantity';

const TikTokViewsPage = () => {
  const navigate = useNavigate();
  const [tiktokViews, setTiktokViews] = useState([
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

  const [selectedPrice, setSelectedPrice] = useState(tiktokViews[0]);
  const toggleViews = index => {
    setTiktokViews(
      tiktokViews.map((Views, i) => {
        return {
          ...Views,
          active: i === index,
        };
      })
    );
    setSelectedPrice(tiktokViews[index]);
  };

  return (
    <>
      <section className={css.buyViews}>
        <div className={css.buyViewsTitle}>
          Buy TikTok <span className="greenText">Views</span>
          <img
            className={css.buyViewsImg}
            src={tikTokViews}
            alt="buyViewsImg"
          />
          with Instant Delivery
        </div>
        <p className={css.buyViewsText}>
          We offer top-notch quality TikTok Views at the best prices! Check our
          deals below, choose best Views package and make an order now!
        </p>
        <div className={css.buyViewsBenefits}>
          <div className={css.buyViewsBenefit}>24/7 support</div>
          <div className={css.buyViewsBenefit}>Quick Delivery Start</div>
          <div className={css.buyViewsBenefit}>No password required</div>
        </div>

        {showPackages && (
          <div className={css.buyViewsCustomWrap}>
            <div
              className={css.buyViewsCustomLink}
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
          <div className={css.buyViewsCustomWrap}>
            <div
              className={css.buyViewsCustomLink}
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
          <div className={css.buyViewsQuantityBlock}>
            {tiktokViews.map((data, index) => (
              <TikTokViews
                data={data}
                index={index}
                key={index}
                toggleViews={toggleViews}
                color="violet"
              />
            ))}
          </div>
        )}

        {showCustomQuantity && (
          <CustomQuantity
            blockColor="green"
            textColor="greenText"
            discountColor="greenDiscount"
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
              <span className={css.savingsPrice}>${selectedPrice.savings}</span>
            </div>
          </div>
          <button
            className={css.buyLink}
            onClick={() =>
              navigate('getStarted', {
                state: { selectedPrice },
              })
            }
          >
            Buy Now
          </button>
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

export default TikTokViewsPage;
