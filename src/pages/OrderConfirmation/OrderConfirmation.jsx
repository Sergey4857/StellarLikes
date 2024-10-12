import { useLocation } from 'react-router-dom';
import css from '../OrderConfirmation/OrderConfirmation.module.css';
import { useState } from 'react';

const OrderConfirmation = () => {
  const [processing, setProcessing] = useState(false);

  const location = useLocation();

  console.log(location.state);

  const {
    price,
    productService,
    quantity,
    productId,
    userEmail,
    date,
    shop_name,
    paymentMethod,
  } = location.state || {};
  return (
    <div className={css.orderWrapper}>
      <div className={css.order}>
        <div className="section-title">
          Order <span className="pinkText">Confirmation</span>
        </div>
        {!processing && (
          <button
            className={css.orderBtn}
            onClick={() => {
              setProcessing(true);
            }}
          >
            <span className={css.orderIcon}></span>
            Finish Payment
          </button>
        )}
        <div className={css.orderWrap}>
          <div className={css.orderFirst}>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>ID</div>
              <div className={css.orderTitle}>{productId}</div>
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
              <div className={css.orderTitle}>{date}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Target url</div>
              <div className={css.orderTitle}>{shop_name}</div>
            </div>
          </div>
          <div className={css.orderSecond}>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Status</div>
              {processing ? (
                <div className={`${css.orderTitle} ${css.orderStatus}`}>
                  Processing
                </div>
              ) : (
                <div className={`${css.orderTitle} ${css.pendingStatus}`}>
                  Pending Payment
                </div>
              )}
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>order amount</div>
              <div className={css.orderTitle}>{quantity}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>order start count</div>
              <div className={css.orderTitle}>{quantity}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Method</div>
              <div className={css.orderTitle}>{paymentMethod}</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>email</div>
              <div className={css.orderTitle}>{userEmail}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
