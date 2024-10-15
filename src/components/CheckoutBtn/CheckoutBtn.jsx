import { useState } from 'react';
import css from './CheckoutBtn.module.css';
import { payCheckout } from '../../Api/payCheckout';

const CheckoutButton = ({ fields }) => {
  const [error, setError] = useState(null);

  const {
    country,
    shop_name,
    product_id,
    email,
    price,
    productService,
    quantity,
    custom_link,
  } = fields;

  const handleClick = async () => {
    try {
      const data = await payCheckout({
        country,
        shop_name,
        product_id,
        email,
        price,
        productService,
        quantity,
        custom_link,
        success_url: `http://localhost:3000/StellarLikes/OrderConfirmation/success`,
        fail_url: `http://localhost:3000/StellarLikes/orderConfirmation/fail`,
        cancel_url: `http://localhost:3000/StellarLikes/orderConfirmation/cancel`,
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
      <button className={css.checkoutButton} onClick={handleClick}>
        <span>Proceed to secure checkout</span>
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default CheckoutButton;
