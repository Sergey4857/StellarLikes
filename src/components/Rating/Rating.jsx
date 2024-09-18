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
        <h1 className="section-title">Grow faster. Without the hassle.</h1>
        <p className={css.ratingText}>
          TikTok promotion made easy. Whether looking for likes, views or
          followers, you've come to the right place. Let StellarLikes do the
          work.
        </p>
        <div className={css.ratingWrapper}>
          <div className={`${css.ratingBlock} ${css.violetBorder}`}>
            <div className={css.ratingLinkBlock}>
              <div className={css.ratingContent}>
                <img className={css.ratingImg} src={tikTokLikes} alt="Likes" />
                TikTok <span className={css.pink}>Likes</span>
              </div>

              <div className={css.ratingStarsBlock}>
                <img
                  className={css.ratingStarsImg}
                  src={StarsBlue}
                  alt="StarsBlue"
                />
                <div className={css.ratingStarsText}>
                  Rated 4.9 of 5 of intergalactic stars
                </div>
              </div>

              <p className={css.ratingStarsDescription}>
                Our award-winning, instantly-delivered Instagram likes are
                sourced from real and active users. Delivered in 60 seconds.
              </p>
              <div className={css.ratingLinkContent}>
                <Link
                  className={`${css.ratingLink} ${css.pinkLink}`}
                  to="/tikTokLikes"
                >
                  Buy Likes
                </Link>
                <div className={css.ratingStarsText}>
                  Rated 4.9 of 5 of intergalactic stars
                </div>
              </div>
            </div>
          </div>
          <div className={`${css.ratingBlock} ${css.greenBorder}`}>
            <div className={css.ratingLinkBlock}>
              <div className={css.ratingContent}>
                <img className={css.ratingImg} src={TikTokViews} alt="Likes" />
                TikTok <span className={css.green}>Views</span>
              </div>

              <div className={css.ratingStarsBlock}>
                <img
                  className={css.ratingStarsImg}
                  src={StarsGreen}
                  alt="StarsGreen"
                />
                <div className={css.ratingStarsText}>
                  Rated 4.9 of 5 of intergalactic stars
                </div>
              </div>

              <p className={css.ratingStarsDescription}>
                Our award-winning, instantly-delivered Instagram likes are
                sourced from real and active users. Delivered in 60 seconds.
              </p>
              <div className={css.ratingLinkContent}>
                <Link
                  className={`${css.ratingLink} ${css.greenLink}`}
                  to="/tikTokViews"
                >
                  Buy Views
                </Link>
                <div className={css.ratingStarsText}>Starting at $0.89</div>
              </div>
            </div>
          </div>
          <div className={`${css.ratingBlock} ${css.orangeBorder}`}>
            <div className={css.ratingLinkBlock}>
              <div className={css.ratingContent}>
                <img
                  className={css.ratingImg}
                  src={TikTokFollowers}
                  alt="Likes"
                />
                TikTok <span className={css.orange}>Likes</span>
              </div>

              <div className={css.ratingStarsBlock}>
                <img
                  className={css.ratingStarsImg}
                  src={StarsOrange}
                  alt="StarsOrange"
                />
                <div className={css.ratingStarsText}>
                  Rated 4.9 of 5 of intergalactic stars
                </div>
              </div>

              <p className={css.ratingStarsDescription}>
                Our award-winning, instantly-delivered Instagram likes are
                sourced from real and active users. Delivered in 60 seconds.
              </p>
              <div className={css.ratingLinkContent}>
                <Link
                  className={`${css.ratingLink} ${css.orangeLink}`}
                  to="/tikTokFollowers"
                >
                  Buy Followers
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
