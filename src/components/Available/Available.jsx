import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import css from './Available.module.css';

import tiktokLikes from '../../icons/tiktokLikes.svg';
import tiktokHoverLikes from '../../icons/tiktokLikesHover.svg';

import tiktokFolowers from '../../icons/tiktokFolowers.svg';
import tiktokFolowersHover from '../../icons/tiktokFolowersHover.svg';

import tiktokViews from '../../icons/tiktokViews.svg';
import tiktokViewsHover from '../../icons/tiktokViewsHover.svg';

gsap.registerPlugin(ScrollTrigger);

export default function Available() {
  const linkBlockRef = useRef(null);

  useEffect(() => {
    const links = linkBlockRef.current.querySelectorAll(
      `.${css.availableLink}`
    );

    gsap.set(links, {
      scale: 0.5,
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: linkBlockRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(links, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      },
    });
  }, []);

  return (
    <section className={css.availableSection}>
      <h2 className="section-title">
        Available on <span className="pinkText">StellarLikes</span>
      </h2>

      <p className={css.availableText}>
        Whether you're looking to grow your followers, boost your likes, or
        increase your views — StellarLikes is your #1 option. Premium results,
        without the high price.
      </p>

      <div className={css.availableLinkBlock} ref={linkBlockRef}>
        <Link
          className={`${css.availableLink} ${css.violetBorder}`}
          to="/tikTokLikes"
        >
          <div className={css.availableLinkWrap}>
            <img
              src={tiktokLikes}
              alt="tikTokLikes"
              className={css.mainImage}
            />
            <img
              src={tiktokHoverLikes}
              alt="tikTokLikes"
              className={css.hoverImage}
            />
            <div className={css.availableLinkHoverText}> TikTok Likes</div>
            <div className={css.availableLinkText}>
              TikTok <span className={css.pink}>Likes</span>
            </div>
          </div>
        </Link>

        <Link
          className={`${css.availableLink} ${css.greenBorder}`}
          to="/buy-tiktok-views"
        >
          <div className={css.availableLinkWrap}>
            <img
              src={tiktokViews}
              alt="tiktokViews"
              className={css.mainImage}
            />
            <img
              src={tiktokViewsHover}
              alt="tiktokViews"
              className={css.hoverImage}
            />
            <div className={css.availableLinkHoverText}> TikTok Views</div>
            <div className={css.availableLinkText}>
              TikTok <span className={css.green}>Views</span>
            </div>
          </div>
        </Link>

        <Link
          className={`${css.availableLink} ${css.orangeBorder}`}
          to="/buy-tiktok-followers"
        >
          <div className={css.availableLinkWrap}>
            <img
              src={tiktokFolowers}
              alt="tikTokFollowers"
              className={css.mainImage}
            />
            <img
              src={tiktokFolowersHover}
              alt="tikTokFollowers"
              className={css.hoverImage}
            />
            <div className={css.availableLinkHoverText}> TikTok Followers</div>
            <div className={css.availableLinkText}>
              TikTok <span className={css.orange}>Followers</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
