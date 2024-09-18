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
        <h1 className="section-title">And other features...</h1>
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
              <div className={css.featuresTitle}>24/7 Live Support</div>
              <p className={css.featuresDescription}>
                We provide the best customer support experience around the
                clock. Our dedicated team is available 24/7, ensuring help is
                always just a click away through our on-site chat feature.
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

              <div className={css.featuresTitle}>Refund Guarantee System</div>

              <p className={css.featuresDescription}>
                We prioritize customer satisfaction above all else. If you've
                mistakenly ordered a service for a private account or used an
                incorrect link format, our system detects the error and
                automatically refund.
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

              <div className={css.featuresTitle}>Secure Payment Options</div>
              <p className={css.featuresDescription}>
                Your security is our priority. StellerLikes offers a variety of
                secure payment methods, including credit and debits cards, Apple
                Pay, Google Pay, Discover and Crypto.
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

              <div className={css.featuresTitle}>No Password Needed</div>

              <p className={css.featuresDescription}>
                We will never ask for your password or any other private
                information. After placing your first order, our system
                automatically creates an account for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
