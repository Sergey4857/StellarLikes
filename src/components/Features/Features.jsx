import React, { useEffect, useRef } from 'react';
import css from './Features.module.css';

import features1 from '../../icons/features1.svg';
import features2 from '../../icons/features2.svg';
import features3 from '../../icons/features3.svg';
import features4 from '../../icons/features4.svg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const images = featuresRef.current.querySelectorAll('[data-animate]');

    images.forEach(image => {
      gsap.fromTo(
        image,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 95%',
            end: 'top 10%',
          },
        }
      );
    });
  }, []);

  return (
    <section className={css.features} ref={featuresRef}>
      <div className={css.featuresWrap}>
        <h2 className="section-title">And other features...</h2>
        <p className={css.featuresText}>
          TikTok promotion made easy. Whether looking for likes, views or
          followers, you've come to the right place. Let StellarLikes do the
          work.
        </p>
        <div className={css.featuresWrapper}>
          <div className={css.featuresBlock}>
            <div className={css.featuresLinkBlock}>
              <div className={css.featuresImgWrap}>
                <div className={css.featuresBackgroung}></div>
                <img
                  data-animate
                  className={css.featuresImg}
                  src={features1}
                  alt="Likes"
                />
              </div>
              <h3 className={css.featuresTitle}>24/7 Live Support</h3>
              <p className={css.featuresDescription}>
                Our customer support team is available around the clock. Get
                instant help through our on-site chat.
              </p>
            </div>
          </div>
          <div className={css.featuresBlock}>
            <div className={css.featuresLinkBlock}>
              <div className={css.featuresImgWrap}>
                <div className={css.featuresBackgroung}></div>
                <img
                  data-animate
                  className={css.featuresImg}
                  src={features2}
                  alt="Likes"
                />
              </div>

              <h3 className={css.featuresTitle}>Refund Guarantee System</h3>

              <p className={css.featuresDescription}>
                If you've ordered for a private account or provided incorrect
                details, our system detects the error and issues a refund
                automatically.
              </p>
            </div>
          </div>
          <div className={css.featuresBlock}>
            <div className={css.featuresLinkBlock}>
              <div className={css.featuresImgWrap}>
                <div className={css.featuresBackgroung}></div>
                <img
                  data-animate
                  className={css.featuresImg}
                  src={features3}
                  alt="Likes"
                />
              </div>

              <h3 className={css.featuresTitle}>Secure Payment Options</h3>
              <p className={css.featuresDescription}>
                StellarLikes supports various secure payment methods including
                credit cards, Apple Pay, Google Pay, Discover, and Crypto.
              </p>
            </div>
          </div>
          <div className={css.featuresBlock}>
            <div className={css.featuresLinkBlock}>
              <div className={css.featuresImgWrap}>
                <div className={css.featuresImgWrap}>
                  <div className={css.featuresBackgroung}></div>
                  <img
                    data-animate
                    className={css.featuresImg}
                    src={features4}
                    alt="Likes"
                  />
                </div>
              </div>

              <h3 className={css.featuresTitle}>No Password Needed</h3>

              <p className={css.featuresDescription}>
                We never ask for your password. Once your first order is placed,
                an account is automatically created for you, no sensitive
                information required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
