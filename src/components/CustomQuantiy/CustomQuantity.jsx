import css from './CustomQuantity.module.css';

const CustomQuantity = () => {
  return (
    <>
      <div className={css.customQuantitySection}>
        <div className={css.customAmountBlock}>
          <div className={css.customAmountTitle}>Your Custom Amount</div>
          <input
            className={css.customAmountInput}
            type="number"
            placeholder="Tap Here"
          />
        </div>
        <div className={css.customDiscountBlock}>
          <div className={css.customDiscountTitle}>Your Discount</div>
          <div className={css.customDiscountPercent}>0% off</div>
        </div>
      </div>
      <div className={css.customQuntityText}>
        You need <span className={css.customQuntitySpan}>473</span> more likes
        for
        <span className={css.customQuntitySpan}>15%</span> discount
      </div>
    </>
  );
};

export default CustomQuantity;
