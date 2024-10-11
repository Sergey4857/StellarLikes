import css from './TikTokViews.module.css';

export default function TikTokViews({ data, index, toggleViews }) {
  const { quantity, discount, active } = data;

  return (
    <>
      <div
        className={`${css.data} ${active ? css.active : ''}`}
        onClick={() => toggleViews(index)}
      >
        <div className={css.buyViewsQuantity}>
          <div className={css.quantity}>{quantity}</div>
          <div className={css.discount}>{discount} off</div>
        </div>
      </div>
    </>
  );
}
