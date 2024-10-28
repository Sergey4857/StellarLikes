import css from './Reviews.module.css';
import star from '../../icons/rating-star.svg';

export default function Reviews() {
  return (
    <>
      <section className={css.reviewsSection}>
        <div className={css.reviews}>
          <h1 className={css.reviewsTitle}>
            <span className={css.pinkText}>StellarLikes</span> Reviews
          </h1>
          <p className={css.reviewsText}>
            The experienced and dedicated StellarLikes team of social media
            professionals has earned the trust of hundreds of thousands of
            satisfied customers, by providing them with the most powerful
            organic account growth available anywhere. We’d love the opportunity
            to grow your social media presence and earn your trust as well. But
            we work to earn your trust another way, too.
          </p>
          <div className={css.reviewsBlock}>
            <div className={css.reviewsRating}>
              <img src={star} alt="star" className={css.slideStars} />
              <img src={star} alt="star" className={css.slideStars} />
              <img src={star} alt="star" className={css.slideStars} />
              <img src={star} alt="star" className={css.slideStars} />
              <img src={star} alt="star" className={css.slideStars} />
              <div className={css.reviewsStarsRating}>5.0</div>
            </div>
            <div className={css.reviewsBox}>
              <div className={css.reviewsInfo}>
                Rated <span className={css.greenText}>5.0 out of 5 </span> based
                on
                <span className={css.greenText}> 210 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
