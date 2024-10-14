import React, { useState, useEffect } from 'react';
import css from './CustomQuantity.module.css';

const CustomQuantity = ({
  discountLevels,
  basePricePerUnit,
  onQuantityChange,
  customPrice,
  customQuantity,
  blockColor,
  textColor,
  discountColor,
  initialQuantity = 100,
}) => {
  const [quantity, setQuantity] = useState(customQuantity || initialQuantity);
  const [inputValue, setInputValue] = useState(
    customQuantity || initialQuantity
  );
  const [discountPercent, setDiscountPercent] = useState(0);
  const [nextDiscountQuantity, setNextDiscountQuantity] = useState(null);
  const [nextDiscountPercent, setNextDiscountPercent] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);

  console.log(nextDiscountQuantity);
  console.log(nextDiscountPercent);
  useEffect(() => {
    onQuantityChange(quantity);

    let applicableDiscount = 0;
    for (let i = discountLevels.length - 1; i >= 0; i--) {
      if (quantity >= discountLevels[i].quantity) {
        applicableDiscount = discountLevels[i].discount;
        break;
      }
    }
    setDiscountPercent(Math.round(applicableDiscount));

    let nextLevel = null;
    for (let i = 0; i < discountLevels.length; i++) {
      if (quantity < discountLevels[i].quantity) {
        nextLevel = discountLevels[i];
        break;
      }
    }
    if (nextLevel) {
      setNextDiscountQuantity(nextLevel.quantity - quantity);
      setNextDiscountPercent(nextLevel.discount);
    } else {
      setNextDiscountQuantity(null);
      setNextDiscountPercent(null);
    }
  }, [quantity, discountLevels, onQuantityChange]);

  const handleInputChange = e => {
    let value = e.target.value;
    setInputValue(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        let intValue = parseInt(value, 10);
        if (
          !isNaN(intValue) &&
          intValue >= initialQuantity &&
          intValue <= 20000
        ) {
          setQuantity(intValue);
        } else if (intValue < initialQuantity) {
          setQuantity(initialQuantity);
          setInputValue(initialQuantity);
        } else if (intValue > 20000) {
          setQuantity(20000);
          setInputValue(20000);
        } else {
          setInputValue(quantity);
        }
      }, 1000)
    );
  };

  return (
    <>
      <div className={css.customQuantitySection}>
        <div className={`${css[blockColor]} ${css.customAmountBlock}`}>
          <div className={css.customAmountTitle}>Your Custom Amount</div>
          <input
            className={css.customAmountInput}
            type="number"
            placeholder="Tap Here"
            value={inputValue}
            onChange={handleInputChange}
            min={initialQuantity}
            max="20000"
          />
        </div>
        <div className={css.customDiscountBlock}>
          <div className={`${css[textColor]} ${css.customDiscountTitle}`}>
            Your Discount
          </div>
          <div className={`${css[discountColor]} ${css.customDiscountPercent}`}>
            {discountPercent}% off
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomQuantity;
