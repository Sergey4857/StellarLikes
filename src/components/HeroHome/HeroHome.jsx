import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import css from './HeroHome.module.css';

const HeroHome = () => {
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroLinkRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(heroLinkRef.current, {
      duration: 0.5,
      scale: 1.3,
      ease: 'power1.inOut',
      repeat: 3,
    }).to(heroLinkRef.current, {
      duration: 0.5,
      scale: 1,
      repeat: 3,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <section className={css.heroHome}>
      <div className={css.heroContent}>
        <div className={css.heroWrap}>
          <h1 className={css.heroTitle} ref={heroTitleRef}>
            Buy TikTok{' '}
            <span className="pinkText">
              Likes, Followers, Views & Live Views
            </span>
          </h1>
          <p className={css.heroText} ref={heroTextRef}>
            Don't settle for fake users. StellarLikes delivers followers, likes,
            and views from real users, delivered instantly. At the lowest
            possible prices.
          </p>
          <a className={css.heroLink} href="#my-section" ref={heroLinkRef}>
            Show me how
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
