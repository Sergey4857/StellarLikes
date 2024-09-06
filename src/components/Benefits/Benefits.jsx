import css from './Benefits.module.css';
import benefit1 from '../../icons/benefit1.svg';
import benefit2 from '../../icons/benefit2.svg';
import benefit3 from '../../icons/benefit3.svg';

export default function Benefits() {
  return (
    <section className={css.benefitsSection}>
      <div className="section-title">
        So, why <span className="pinkText">StellarLikes</span>
      </div>

      <p className={css.benefitsText}>
        Besides being the only platform to provide real likes, views and
        followers, we're customizable and offer prices no one else can match.
      </p>

      <div className={css.benefitsWrap}>
        <div className={css.benefitsBlock}>
          <img className={css.benefitsImg} src={benefit1} alt="benefit" />
          <div className={css.benefitTitle}>Instant delivery</div>
          <div className={css.benefitsDescription}>
            Besides being the only platform to provide real likes, views and
            followers, we're customizable and offer prices no one else can
            match.
          </div>
        </div>

        <div className={css.benefitsBlock}>
          <img className={css.benefitsImg} src={benefit2} alt="benefit" />
          <div className={css.benefitTitle}>100% real. Always.</div>
          <div className={css.benefitsDescription}>
            Besides being the only platform to provide real likes, views and
            followers, we're customizable and offer prices no one else can
            match.
          </div>
        </div>

        <div className={css.benefitsBlock}>
          <img className={css.benefitsImg} src={benefit3} alt="benefit" />
          <div className={css.benefitTitle}>Cheapest prices</div>
          <div className={css.benefitsDescription}>
            Besides being the only platform to provide real likes, views and
            followers, we're customizable and offer prices no one else can
            match.
          </div>
        </div>
      </div>
    </section>
  );
}
