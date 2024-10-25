import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import css from './GetFreeGoodsBtn.module.css';
import { GetFreeGoods } from 'Api/GetFreeService';

const GetFreeGoodsBtn = ({ fields }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    custom_link,
    email,
    product_id,
    quantity,
    service_type,
    page_link,
    shop_name,
  } = fields;

  const handleClick = async () => {
    console.log(fields);
    setLoading(true);
    setError(null);

    try {
      const data = await GetFreeGoods({
        custom_link,
        email,
        page_link,
        product_id: 179,
        quantity,
        service_type,
        shop_name,
      });

      if (data) {
        navigate(`/OrderConfirmation?order_id=${data}`);
      } else {
        setError('Error retrieving the order ID.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={css.selectedLink}
        onClick={handleClick}
        disabled={loading}
      >
        <span className={css.checkoutButtonText}>Get free</span>
        {loading && <span className={css.loader}></span>}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default GetFreeGoodsBtn;
