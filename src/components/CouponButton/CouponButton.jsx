import React, { useState } from 'react';
import axios from 'axios';
import css from './CouponButton.module.css';

const consumer_key = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_KEY;
const consumer_secret = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY;

const CouponButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchAllCoupons = async () => {
    try {
      setLoading(true);
      setError(null); // Reset any previous errors
      const response = await axios.get(
        `https://testgraming.net/wp-json/wc/v3/coupons?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
      );
      console.log(response.data); // Process or display the data as needed
    } catch (error) {
      console.error('Ошибка запроса:', error);
      setError('Произошла ошибка при запросе.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className={css.couponSbmt}
        type="button"
        onClick={FetchAllCoupons}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Apply'}
      </button>
      {error && <p className={css.errorMessage}>{error}</p>}
    </div>
  );
};

export default CouponButton;
