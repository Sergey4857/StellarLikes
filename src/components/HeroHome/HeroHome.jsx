import css from './HeroHome.module.css';

const HeroHome = () => {
  return (
    <section className={css.heroHome}>
      <div className={css.heroContent}>
        <div className={css.heroWrap}>
          <h1 className={css.heroTitle}>
            Buy TikTok{' '}
            <span className="pinkText">
              Likes, Followers, Views & Live Views
            </span>
          </h1>
          <p className={css.heroText}>
            Don't settle for fake users. StellarLikes delivers followers, likes,
            and views from real users, delivered instantly. At the lowest
            possible prices.
          </p>
          <a className={css.heroLink} href="#my-section">
            Show me how
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
