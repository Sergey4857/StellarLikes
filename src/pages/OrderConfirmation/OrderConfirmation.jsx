import css from '../OrderConfirmation/OrderConfirmation.module.css';

const OrderConfirmation = () => {
  return (
    <div className={css.orderWrapper}>
      <div className={css.order}>
        <div className="section-title">
          Order <span className="pinkText">Confirmation</span>
        </div>
        <div className={css.orderWrap}>
          <div className={css.orderFirst}>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>ID</div>
              <div className={css.orderTitle}>18439</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Service</div>
              <div className={css.orderTitle}>Buy TikTok Followers</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Amount</div>
              <div className={css.orderTitle}>$91,75</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Date</div>
              <div className={css.orderTitle}>Dec 30, 09:42 PM</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Target url</div>
              <div className={css.orderTitle}>graming.com</div>
            </div>
          </div>
          <div className={css.orderSecond}>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Status</div>
              <div className={`${css.orderTitle} ${css.orderStatus}`}>
                Processing
              </div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>order amount</div>
              <div className={css.orderTitle}>2500</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>order start count</div>
              <div className={css.orderTitle}>253</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>Method</div>
              <div className={css.orderTitle}>Card Payment</div>
            </div>
            <div className={css.orderBox}>
              <div className={css.orderSubtitle}>email</div>
              <div className={css.orderTitle}>example@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
