import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchOrderInfo } from '../../Api/FetchOrderInfo';
import css from '../OrderConfirmation/OrderConfirmation.module.css';

const OrderConfirmation = () => {
  const { status } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const orderId = new URLSearchParams(search).get('order_id');
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (!orderId) return navigate('/');
    const fetchOrderData = async () => {
      try {
        const data = await FetchOrderInfo(orderId);
        setOrderData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchOrderData();
  }, [navigate, orderId]);

  if (!orderData) return <p>Loading...</p>;

  const {
    id,
    total: price,
    date_created: date,
    status: orderStatus,
    payment_method_title: paymentMethod = 'N/A',
    billing: { email: userEmail = 'N/A' } = {},
    line_items: [{ name: productService, quantity } = {}] = [],
    meta_data = [],
    // payment_url,
  } = orderData;

  const targetLink =
    meta_data.find(({ key }) => key === 'Target Link')?.value || 'N/A';

  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className={css.orderWrapper}>
      <div className={css.order}>
        <div className="section-title">
          Order <span className="pinkText">Confirmation</span>
        </div>
        {status === 'pending' && (
          <button
            className={css.orderBtn}
            // onClick={() => {
            //   window.location.href = payment_url;
            // }}
          >
            <span className={css.orderIcon}></span>Finish Payment
          </button>
        )}

        <div className={css.orderWrap}>
          <div className={css.orderFirst}>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>ID</div>
              <div className={css.orderTitle}>{id}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Service</div>
              <div className={css.orderTitle}>{productService}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Amount</div>
              <div className={css.orderTitle}>${price}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Date</div>
              <div className={css.orderTitle}>{formattedDate}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Target URL</div>
              <div className={css.orderTitle}>{targetLink}</div>
            </div>
          </div>
          <div className={css.orderSecond}>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Status</div>
              {status === 'pending' && (
                <div className={`${css.orderTitle} ${css.orderPending}`}>
                  Pending Payment
                </div>
              )}
              {status === 'fail' && (
                <div className={`${css.orderTitle} ${css.orderFail}`}>
                  {status}
                </div>
              )}

              {status === 'cancel' && (
                <div className={`${css.orderTitle} ${css.orderCancel}`}>
                  Canceled
                </div>
              )}
              {status === 'success' && (
                <div className={`${css.orderTitle} ${css.orderSuccess}`}>
                  Processing
                </div>
              )}
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Quantity</div>
              <div className={css.orderTitle}>{quantity}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Method</div>
              <div className={css.orderTitle}>{paymentMethod}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Email</div>
              <div className={css.orderTitle}>{userEmail}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
