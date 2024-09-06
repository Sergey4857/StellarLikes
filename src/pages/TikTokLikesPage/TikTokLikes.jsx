import css from './TikTokLikesPage.module.css';

export default function TikTokLikes({ data, index, toggleLikes }) {
  const { quantity, percent, active } = data;

  return (
    <div
      className={`${css.data} ${active ? css.active : ''}`}
      onClick={() => toggleLikes(index)}
    >
      <div className={css.buyLikesQuantity}>
        <div className={css.quantity}>{quantity}</div>
        <div className={css.discount}>{percent} off</div>
      </div>
    </div>
  );
}
