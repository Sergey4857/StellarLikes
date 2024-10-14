import { useEffect, useRef } from 'react';
import css from './Benefits.module.css';
import benefit1 from '../../icons/benefit1.svg';
import benefit2 from '../../icons/benefit2.svg';
import benefit3 from '../../icons/benefit3.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Benefits() {
  const benefitsRef = useRef([]);
  benefitsRef.current = [];

  const addToRefs = el => {
    if (el && !benefitsRef.current.includes(el)) {
      benefitsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    benefitsRef.current.forEach(el => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className={css.benefitsSection}>
      <h2 className="section-title">
        So, why <span className="pinkText">StellarLikes</span>
      </h2>

      <p className={css.benefitsText}>
        Besides being the only platform to provide real likes, views and
        followers, we're customizable and offer prices no one else can match.
      </p>

      <div className={css.benefitsWrap}>
        <div className={css.benefitsBlock} ref={addToRefs}>
          <img className={css.benefitsImg} src={benefit1} alt="benefit" />
          <h3 className={css.benefitTitle}>Instant delivery</h3>
          <div className={css.benefitsDescription}>
            Besides being the only platform to provide real likes, views and
            followers, we're customizable and offer prices no one else can
            match.
          </div>
        </div>

        <div className={css.benefitsBlock} ref={addToRefs}>
          <img className={css.benefitsImg} src={benefit2} alt="benefit" />
          <h3 className={css.benefitTitle}>100% real. Always.</h3>
          <div className={css.benefitsDescription}>
            Besides being the only platform to provide real likes, views and
            followers, we're customizable and offer prices no one else can
            match.
          </div>
        </div>

        <div className={css.benefitsBlock} ref={addToRefs}>
          <img className={css.benefitsImg} src={benefit3} alt="benefit" />
          <h3 className={css.benefitTitle}>Cheapest prices</h3>
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
