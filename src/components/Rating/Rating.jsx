import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Rating.module.css';
import tikTokLikes from '../../icons/tiktokLikes.svg';
import TikTokViews from '../../icons/tiktokViews.svg';
import TikTokFollowers from '../../icons/tiktokFolowers.svg';
import StarsBlue from '../../icons/stars-blue.svg';
import StarsGreen from '../../icons/stars-green.svg';
import StarsOrange from '../../icons/stars-orange.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Rating = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const links = document.querySelectorAll(`.${css.ratingLink}`);

    links.forEach(link => {
      const decorItems = link.querySelectorAll('[data-decor="item"]');

      const handleMouseEnter = () => {
        gsap.to(link, {
          scaleX: 1.03,
          scaleY: 0.98,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        });

        gsap.fromTo(
          decorItems,
          { translateX: '-100%' },
          {
            translateX: 0,
            duration: 0.4,
            stagger: 0.08,
          }
        );
      };

      const handleMouseLeave = () => {
        gsap.to(link, {
          scaleX: 1,
          scaleY: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        });

        gsap.to(decorItems, {
          translateX: '100%',
          duration: 0.4,
          stagger: 0.08,
        });
      };

      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      { yPercent: -15 },
      {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={css.rating}>
      <div ref={backgroundRef} className={css.backgroundImage}></div>
      <div className={css.ratingWrap}>
        <h2 className="section-title">Explore Other Stellar Services</h2>
        <p className={css.ratingText}>
          TikTok promotion made easy. Whether you're after likes, views, or
          followers, StellarLikes has you covered.
        </p>
        <div className={css.ratingWrapper}>
          <div className={`${css.ratingBlock} ${css.violetBorder}`}>
            <div className={css.ratingLinkBlock}>
              <h3 className={css.ratingContent}>
                <img className={css.ratingImg} src={tikTokLikes} alt="Likes" />
                TikTok <span className={css.pink}>Likes</span>
              </h3>

              <div className={css.ratingStarsBlock}>
                <img
                  className={css.ratingStarsImg}
                  src={StarsBlue}
                  alt="StarsBlue"
                />
                <div className={css.ratingStarsText}>Rated 4.9/5 Stars</div>
              </div>

              <p className={css.ratingStarsDescription}>
                Our award-winning, instantly-delivered TikTok likes are sourced
                from real users. Delivered in just 60 seconds.
              </p>
              <div className={css.ratingLinkContent}>
                <Link className={`${css.ratingLink} ${css.pinkLink}`} to="/">
                  <span className={css.linkText}>Buy Likes</span>
                  <span className={css.decor}>
                    <span data-decor="item" className={css.decorItem}></span>
                    <span data-decor="item" className={css.decorItem}></span>
                  </span>
                </Link>

                <div className={css.ratingStarsText}>Starting at $0.5</div>
              </div>
            </div>
          </div>

          <div className={`${css.ratingBlock} ${css.greenBorder}`}>
            <div className={css.ratingLinkBlock}>
              <h3 className={css.ratingContent}>
                <img className={css.ratingImg} src={TikTokViews} alt="Views" />
                TikTok <span className={css.green}>Views</span>
              </h3>

              <div className={css.ratingStarsBlock}>
                <img
                  className={css.ratingStarsImg}
                  src={StarsGreen}
                  alt="StarsGreen"
                />
                <div className={css.ratingStarsText}>Rated 4.9/5 Stars</div>
              </div>

              <p className={css.ratingStarsDescription}>
                Boost your views with our instantly-delivered TikTok views,
                sourced from real users. Delivered in just 60 seconds.
              </p>
              <div className={css.ratingLinkContent}>
                <Link
                  className={`${css.ratingLink} ${css.greenLink}`}
                  to="/buy-tiktok-views"
                >
                  <span className={css.linkText}>Buy Views</span>
                  <span className={css.decor}>
                    <span data-decor="item" className={css.decorItem}></span>
                    <span data-decor="item" className={css.decorItem}></span>
                  </span>
                </Link>
                <div className={css.ratingStarsText}>Starting at $0.89</div>
              </div>
            </div>
          </div>

          <div className={`${css.ratingBlock} ${css.orangeBorder}`}>
            <div className={css.ratingLinkBlock}>
              <h3 className={css.ratingContent}>
                <img
                  className={css.ratingImg}
                  src={TikTokFollowers}
                  alt="Followers"
                />
                TikTok <span className={css.orange}>Followers</span>
              </h3>

              <div className={css.ratingStarsBlock}>
                <img
                  className={css.ratingStarsImg}
                  src={StarsOrange}
                  alt="StarsOrange"
                />
                <div className={css.ratingStarsText}>Rated 4.9/5 Stars</div>
              </div>

              <p className={css.ratingStarsDescription}>
                Grow your follower count with real TikTok followers, instantly
                delivered and guaranteed.
              </p>
              <div className={css.ratingLinkContent}>
                <Link
                  className={`${css.ratingLink} ${css.orangeLink}`}
                  to="/buy-tiktok-followers"
                >
                  <span className={css.linkText}>Buy Followers</span>
                  <span className={css.decor}>
                    <span data-decor="item" className={css.decorItem}></span>
                    <span data-decor="item" className={css.decorItem}></span>
                  </span>
                </Link>
                <div className={css.ratingStarsText}>Starting at $0.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
