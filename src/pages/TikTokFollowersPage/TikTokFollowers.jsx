import css from './TikTokFollowers.module.css';

export default function TikTokFollowers({ data, index, toggleFollowers }) {
  const { quantity, percent, active } = data;

  return (
    <div
      className={`${css.data} ${active ? css.active : ''}`}
      onClick={() => toggleFollowers(index)}
    >
      <div className={css.buyFollowersQuantity}>
        <div className={css.quantity}>{quantity}</div>
        <div className={css.discount}>{percent} off</div>
      </div>
    </div>
  );
}
