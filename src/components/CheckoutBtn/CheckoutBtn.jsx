import { useState } from 'react';
import css from './CheckoutBtn.module.css';
import { payCheckout } from '../../Api/payCheckout';

const CheckoutButton = ({ fields }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    country,
    shop_name,
    product_id,
    email,
    price,
    quantity,
    custom_link,
    coupon,
  } = fields;

  console.log({
    country,
    shop_name,
    product_id,
    email,
    price,
    quantity,
    custom_link,
    success_url: `https://stellarlikes.com/order-confirmation`,
    fail_url: `https://stellarlikes.com/order-confirmation`,
    cancel_url: `https://stellarlikes.com/order-confirmation`,
    coupon,
  });
  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await payCheckout({
        country,
        shop_name,
        product_id,
        email,
        price,
        quantity,
        custom_link,
        coupon,
        success_url: `https://stellarlikes.com/order-confirmation`,
        fail_url: `https://stellarlikes.com/order-confirmation`,
        cancel_url: `https://stellarlikes.com/order-confirmation`,
      });

      if (data?.message?.link && data.message?.order_id) {
        window.location.href = `${data.message.link}`;
      } else {
        setError('Ошибка при получении ссылки для оплаты.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <button
        className={css.checkoutButton}
        onClick={handleClick}
        disabled={loading}
      >
        <span className={css.checkoutButtonText}>
          Proceed to secure checkout
        </span>
        {loading && <span className={css.loader}></span>}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default CheckoutButton;
