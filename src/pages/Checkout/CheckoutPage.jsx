import { useLocation } from 'react-router-dom';
import css from './Checkout.module.css';
import { useState } from 'react';
import CheckoutButton from 'components/CheckoutBtn/CheckoutBtn';

const Checkout = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('Credit / Debit Card');
  // const navigate = useNavigate();

  const {
    country,
    shop_name,
    productId,
    userEmail,
    price,
    productService,
    quantity,
    customLink,
  } = location.state || {};

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  // const handleClick = () => {
  //   const now = new Date();
  //   const options = {
  //     month: 'short',
  //     day: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     hour12: true,
  //   };

  //   const formattedDate = now.toLocaleString('en-US', options);

  //   navigate('/orderConfirmation', {
  //     country,
  //     state: {
  //       country,
  //       price,
  //       productService,
  //       quantity,
  //       productId,
  //       userEmail,
  //       shop_name,
  //       paymentMethod: selectedOption,
  //       date: formattedDate,
  //     },
  //   });
  // };

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

            {/* <label
              className={`${css.radioLabel} ${
                selectedOption === 'Crypto' ? css.active : ''
              } ${css.radioCrypto}`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="Crypto"
                checked={selectedOption === 'Crypto'}
                onChange={handleOptionChange}
                className={css.radioInput}
              />
              <span className={css.radioCustom}></span>
              Crypto
            </label> */}
          </div>

          <CheckoutButton
            fields={{
              country,
              shop_name,
              product_id: productId,
              email: userEmail,
              quantity,
              custom_link: customLink,
            }}
          />

          <div className={css.checkoutInfo}>
            All transactions are secure and encrypted
          </div>
        </div>
        <div className={css.checkoutSecondBlock}>
          <div className={css.priceInfo}>
            Total to pay:
            <span className={css.price}>${price}</span>
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

          {/* <div className={css.discountBlock}>
            <div className={css.discountName}>Add 100 followers</div>
            <div className={css.discountWrap}>
              <div className={css.oldPrice}>$2.97</div>
              <div className={css.newPrice}>$2.22</div>
              <div className={css.discount}>Save 25%</div>
            </div>
          </div> */}

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
    </>
  );
};

export default Checkout;
