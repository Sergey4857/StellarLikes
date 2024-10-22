import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchOrderInfo } from '../../Api/FetchOrderInfo';
import css from '../OrderConfirmation/OrderConfirmation.module.css';
import Loader from 'components/Loader/Loader';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const orderId = new URLSearchParams(search).get('order_id');

  const [orderData, setOrderData] = useState(null);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsButtonActive(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  if (!orderData) return <Loader />;

  const {
    id,
    status,
    total,
    customer_email,
    product_name,
    payment_method,
    date,
    quantity,
    custom_link,
    checkout_id,
  } = orderData;

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={css.orderWrapper}>
      <div className={css.order}>
        <div className="section-title">
          Order <span className="pinkText">Confirmation</span>
        </div>
        {status === 'pending' && (
          <button
            className={`${css.orderBtn} ${isButtonActive ? '' : css.disabled}`}
            onClick={() => {
              if (isButtonActive) {
                window.location.href = `https://pay.sandbox.checkout.com/page/${checkout_id}`;
              }
            }}
            disabled={!isButtonActive}
          >
            {isButtonActive ? (
              <>
                Finish Payment
                <span className={css.orderIcon}></span>
              </>
            ) : (
              `Activate in ${formatTime(timeLeft)}`
            )}
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
              <div className={css.orderTitle}>{product_name}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Amount</div>
              <div className={css.orderTitle}>${total}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Date</div>
              <div className={css.orderTitle}>{date}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Target URL</div>
              <div className={css.orderTitle}>{custom_link}</div>
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
              {status === 'failed' && (
                <div className={`${css.orderTitle} ${css.orderFail}`}>
                  Failed
                </div>
              )}
              {status === 'cancelled' && (
                <div className={`${css.orderTitle} ${css.orderCancel}`}>
                  Canceled
                </div>
              )}
              {status === 'completed' && (
                <div className={`${css.orderTitle} ${css.orderSuccess}`}>
                  Completed
                </div>
              )}
              {status === 'processing' && (
                <div className={`${css.orderTitle} ${css.orderProcessing}`}>
                  Processing
                </div>
              )}
              {(status === 'refunded' || status === 'on-hold') && (
                <div className={`${css.orderTitle} ${css.orderIncorrect}`}>
                  Incorrect order data - Contact Support
                </div>
              )}
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Order amount</div>
              <div className={css.orderTitle}>{quantity}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Method</div>
              <div className={css.orderTitle}>{payment_method}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Email</div>
              <div className={css.orderTitle}>{customer_email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
