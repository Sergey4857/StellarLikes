import React, { useState, useEffect, useRef } from 'react';
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

  const typingTimeoutRef = useRef(null);

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

    // Since nextDiscountQuantity and nextDiscountPercent are not used,
    // the code related to them has been removed to eliminate warnings.
  }, [quantity, discountLevels, onQuantityChange]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      let intValue = parseInt(value, 10);

      if (!isNaN(intValue)) {
        if (intValue < initialQuantity) {
          intValue = initialQuantity;
        } else if (intValue > 20000) {
          intValue = 20000;
        }
        setQuantity(intValue);
        setInputValue(intValue.toString());
      } else if (value === '') {
        setQuantity('');
        setInputValue('');
      } else {
        setInputValue(quantity.toString());
      }
    }, 1000);
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
