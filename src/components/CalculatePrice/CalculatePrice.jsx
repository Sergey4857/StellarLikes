import React, { useEffect, useState } from 'react';
import css from './CalculatePrice.module.css';

const CalculatePrice = ({
  basePricePerUnit,
  quantity,
  discountLevels = [],
  showCustomQuantity,
  customQuantity,
  onPriceCalculated,
}) => {
  const [priceDetails, setPriceDetails] = useState({
    oldPrice: 0,
    newPrice: 0,
    savings: 0,
    discountPercent: 0,
  });

  useEffect(() => {
    const calculatePrice = () => {
      let discountPercent = 0;
      let finalQuantity = customQuantity > 0 ? customQuantity : quantity;

      // Вычисляем процент скидки из discountLevels
      for (let i = discountLevels.length - 1; i >= 0; i--) {
        if (finalQuantity >= discountLevels[i].quantity) {
          discountPercent = discountLevels[i].discount / 100;
          break;
        }
      }

      const oldPrice = finalQuantity * basePricePerUnit;
      const newPrice = oldPrice * (1 - discountPercent);
      const savings = oldPrice - newPrice;

      const calculatedPriceDetails = {
        oldPrice,
        newPrice,
        savings,
        discountPercent: discountPercent * 100,
      };

      setPriceDetails(calculatedPriceDetails);

      if (onPriceCalculated) {
        onPriceCalculated(calculatedPriceDetails);
      }
    };

    calculatePrice();
  }, [
    basePricePerUnit,
    quantity,
    discountLevels,
    customQuantity,
    onPriceCalculated,
  ]);

  return (
    <div className={css.priceContent}>
      <div className={css.priceWrap}>
        <div className={css.mainPrice}>${priceDetails.newPrice.toFixed(2)}</div>
        <div className={css.oldPrice}>${priceDetails.oldPrice.toFixed(2)}</div>
      </div>
      <div className={css.savings}>
        You’re saving{' '}
        <span className={css.savingsPrice}>
          ${priceDetails.savings.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CalculatePrice;
