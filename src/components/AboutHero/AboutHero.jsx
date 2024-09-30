import css from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={css.heroAbout}>
      <div className={css.heroContent}>
        <div className={css.heroWrap}>
          <h1 className={css.heroTitle}>
            Stellar Likes <span className="pinkText">Team</span>
          </h1>
          <p className={css.heroText}>
            Don't settle for fake users. StellarLikes delivers followers, likes,
            and views from real users, delivered instantly. At the lowest
            possible prices.
          </p>
        </div>

        <div className={css.heroImageBlock}></div>
      </div>
    </section>
  );
};

export default AboutHero;
