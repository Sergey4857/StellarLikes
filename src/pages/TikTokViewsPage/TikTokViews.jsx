import css from './TikTokViews.module.css';

export default function TikTokViews({ data, index, toggleViews }) {
  const { quantity, percent, active } = data;

  return (
    <div
      className={`${css.data} ${active ? css.active : ''}`}
      onClick={() => toggleViews(index)}
    >
      <div className={css.buyViewsQuantity}>
        <div className={css.quantity}>{quantity}</div>
        <div className={css.discount}>{percent} off</div>
      </div>
    </div>
  );
}
