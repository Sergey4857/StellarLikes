// CouponButton.jsx
import React, { useState } from 'react';
import axios from 'axios';
import css from './CouponButton.module.css';

// Ensure you store your consumer keys securely
const consumer_key = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_KEY;
const consumer_secret = process.env.REACT_APP_TEST_CHECKOUT_CONSUMER_SECRET_KEY;

const CouponButton = ({
  couponCode,
  price,
  quantity,
  setCouponError,
  handleCouponApplied,
}) => {
  const [loading, setLoading] = useState(false);

  const FetchAllCoupons = async () => {
    try {
      setLoading(true);
      setCouponError(null);
      const response = await axios.get(
        `https://testgraming.net/wp-json/wc/v3/coupons?consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`
      );
      const coupons = response.data;

      const matchedCoupon = coupons.find(
        coupon => coupon.code.toLowerCase() === couponCode.toLowerCase()
      );

      if (!matchedCoupon) {
        setCouponError('Coupon code not found.');
        return;
      }

      if (matchedCoupon.date_expires) {
        const currentDate = new Date();
        const expiryDate = new Date(matchedCoupon.date_expires);
        if (currentDate > expiryDate) {
          setCouponError('Coupon has expired.');
          return;
        }
      }

      if (
        matchedCoupon.usage_limit !== null &&
        matchedCoupon.usage_count >= matchedCoupon.usage_limit
      ) {
        setCouponError('Coupon usage limit has been reached.');
        return;
      }

      let discountAmount = 0;
      const couponAmount = parseFloat(matchedCoupon.amount) || 0;

      if (matchedCoupon.discount_type === 'percent') {
        discountAmount = price * (couponAmount / 100);
      } else if (matchedCoupon.discount_type === 'fixed_cart') {
        discountAmount = couponAmount;
      } else if (matchedCoupon.discount_type === 'fixed_product') {
        discountAmount = couponAmount * quantity;
      } else {
        setCouponError('Unsupported coupon type.');
        return;
      }

      discountAmount = Math.min(discountAmount, price);

      handleCouponApplied(discountAmount, matchedCoupon.code);
    } catch (error) {
      console.error('Error fetching coupons:', error);
      setCouponError('An error occurred while applying the coupon.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={css.couponSbmt}
        type="button"
        onClick={FetchAllCoupons}
        disabled={loading || !couponCode}
      >
        {loading ? 'Loading...' : 'Apply'}
      </button>
    </>
  );
};

export default CouponButton;
