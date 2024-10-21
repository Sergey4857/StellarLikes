// CouponButton.jsx
import React, { useState } from 'react';
import css from './CouponButton.module.css';

const CouponButton = ({
  couponCode,
  price,
  quantity,
  setCouponError,
  handleCouponApplied,
  fetchCoupons,
}) => {
  const [loading, setLoading] = useState(false);

  const applyCoupon = async () => {
    try {
      setLoading(true);
      setCouponError(null);

      const response = await fetchCoupons(); // Вызываем переданную функцию

      console.log(response);

      const matchedCoupon = response.find(
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

      switch (matchedCoupon.discount_type) {
        case 'percent':
          discountAmount = price * (couponAmount / 100);
          break;
        case 'fixed_cart':
          discountAmount = couponAmount;
          break;
        case 'fixed_product':
          discountAmount = couponAmount * quantity;
          break;
        default:
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
    <button
      className={css.couponSbmt}
      type="button"
      onClick={applyCoupon}
      disabled={loading || !couponCode}
    >
      {loading ? 'Loading...' : 'Apply'}
    </button>
  );
};

export default CouponButton;
