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
            At StellarLikes, we go beyond numbers. We specialize in delivering
            genuine followers, likes, and views from real users, instantly, at
            unmatched prices. Our team is a group of experienced social media
            professionals who understand the nuances of organic growth.
          </p>
        </div>

        <div className={css.heroImageBlock}>
          <div className={css.img1}></div>
          <div className={css.img2}></div>
          <div className={css.img3}></div>
          <div className={css.img4}></div>
          <div className={css.img5}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
