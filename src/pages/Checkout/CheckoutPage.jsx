// import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './Checkout.module.css';
import { useState } from 'react';

const Checkout = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const { selectedPrice, uniqueId, selectedPost, userEmail } =
    location.state || {};

  console.log(selectedPrice);
  console.log(uniqueId);
  console.log(selectedPost);
  console.log(userEmail);

  const [selectedOption, setSelectedOption] = useState('1');

  console.log(selectedOption);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={css.checkoutWrap}>
        <div className={css.checkoutFirstBlock}>
          <h1 className={css.checkoutTitle}>Checkout</h1>
          <div className={css.checkoutMethodTitle}>Payment method</div>
          <div className={css.checkoutForm}>
            <label
              className={`${css.radioLabel} ${
                selectedOption === '1' ? css.active : ''
              } ${css.radioCredit}`}
            >
              <input
                type="radio"
                name="option"
                value="1"
                checked={selectedOption === '1'}
                onChange={handleOptionChange}
                className={css.radioInput}
              />
              <span className={css.radioCustom}></span>
              Credit / Debit Card
            </label>

            <label
              className={`${css.radioLabel} ${
                selectedOption === '2' ? css.active : ''
              } ${css.radioCrypto}`}
            >
              <input
                type="radio"
                name="option"
                value="2"
                checked={selectedOption === '2'}
                onChange={handleOptionChange}
                className={css.radioInput}
              />
              <span className={css.radioCustom}></span>
              Crypto
            </label>
          </div>
          <div className={css.checkoutButton}>
            <span>Procceed to secure checkout</span>
          </div>
          <div className={css.checkoutInfo}>
            All transactions are secure and encrypted
          </div>
        </div>
        <div className={css.checkoutSecondBlock}>
          <div className={css.priceInfo}>
            Total to pay:
            <span className={css.price}>$7.42</span>
          </div>

          <div className={css.productBlock}>
            <div className={css.serviceBlock}>
              <div className={css.serviceTitle}>Service</div>
              <div className={css.serviceProduct}>1100 TikTok Followers</div>
            </div>
            <div className={css.urlBlock}>
              <div className={css.urlTitle}>Target URL</div>
              <div className={css.url}>
                https://www.speedtest.net/result/16554258090
              </div>
            </div>
          </div>

          <div className={css.discountBlock}>
            <div className={css.discountName}>Add 100 followers</div>
            <div className={css.discountWrap}>
              <div className={css.oldPrice}>$2.97</div>
              <div className={css.newPrice}>$2.22</div>
              <div className={css.discount}>Save 25%</div>
            </div>
          </div>

          <div className={css.couponBlock}>
            <div className={css.couponTitle}>Add a coupon code</div>
            <input
              className={css.couponInpt}
              type="text"
              placeholder="Enter code"
            />
            <button className={css.couponSbmt} type="button">
              Apply
            </button>
          </div>
        </div>
      </div>
      {/* 
      {selectedProduct ? (
        <p>Proceeding with: {selectedProduct}</p>
      ) : (
        <p>No product selected</p>
      )} */}
    </>
  );
};

export default Checkout;
