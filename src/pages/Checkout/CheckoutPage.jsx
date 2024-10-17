// Checkout.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './Checkout.module.css';
import CheckoutButton from 'components/CheckoutBtn/CheckoutBtn';
import CouponButton from 'components/CouponButton/CouponButton';

const Checkout = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('Credit / Debit Card');

  const {
    country,
    shop_name,
    productId,
    userEmail,
    price: priceString,
    productService,
    quantity: quantityString,
    customLink,
  } = location.state || {};

  // Ensure price and quantity are numbers
  const price = parseFloat(priceString) || 0;
  const quantity = parseInt(quantityString, 10) || 1;

  const [couponCode, setCouponCode] = useState('');
  const [appliedCouponCode, setAppliedCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(price);
  const [couponError, setCouponError] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleRemoveCoupon = () => {
    setDiscount(0);
    setDiscountedPrice(price);
    setAppliedCouponCode('');
    setCouponCode('');
    setCouponError(null);
    setCouponApplied(false);
  };

  // Function to handle successful coupon application
  const handleCouponApplied = (discountAmount, appliedCode) => {
    setDiscount(discountAmount);
    setDiscountedPrice(price - discountAmount);
    setAppliedCouponCode(appliedCode);
    setCouponApplied(true);
    setCouponError(null);
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
                selectedOption === 'Credit / Debit Card' ? css.active : ''
              } ${css.radioCredit}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="Credit / Debit Card"
                checked={selectedOption === 'Credit / Debit Card'}
                onChange={handleOptionChange}
                className={css.radioInput}
              />
              <span className={css.radioCustom}></span>
              Credit / Debit Card
            </label>
          </div>

          <CheckoutButton
            fields={{
              price: discountedPrice,
              country,
              shop_name,
              product_id: productId,
              email: userEmail,
              quantity,
              custom_link: customLink,
              coupon: appliedCouponCode,
            }}
          />

          <div className={css.checkoutInfo}>
            All transactions are secure and encrypted
          </div>
        </div>
        <div className={css.checkoutSecondBlock}>
          <div className={css.priceInfo}>
            Total to pay:
            <span className={css.price}>${discountedPrice.toFixed(2)}</span>
          </div>

          <div className={css.productBlock}>
            <div className={css.serviceBlock}>
              <div className={css.serviceTitle}>Service</div>
              <div className={css.serviceProduct}>
                {quantity} {productService}
              </div>
            </div>
            <div className={css.urlBlock}>
              <div className={css.urlTitle}>Target URL</div>
              <div className={css.url}>{customLink}</div>
            </div>
          </div>

          {discount > 0 && (
            <div className={css.discountBlock}>
              <div className={css.discountName}>
                Coupon: <strong>{appliedCouponCode}</strong>
              </div>
              <div className={css.discountWrap}>
                <div className={css.discountAmount}>
                  -${discount.toFixed(2)}
                </div>
              </div>
              {couponApplied && (
                <button
                  className={css.removeCouponButton}
                  type="button"
                  onClick={handleRemoveCoupon}
                >
                  Remove
                </button>
              )}
            </div>
          )}

          <div className={css.couponBlock}>
            {couponError && <p className={css.errorMessage}>{couponError}</p>}

            {!couponApplied && (
              <>
                <div className={css.couponTitle}>Add a coupon code</div>
                <input
                  className={css.couponInpt}
                  type="text"
                  placeholder="Enter code"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                />
                <CouponButton
                  couponCode={couponCode}
                  price={price}
                  quantity={quantity}
                  setCouponError={setCouponError}
                  handleCouponApplied={handleCouponApplied}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
