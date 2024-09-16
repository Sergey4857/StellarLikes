import css from './Available.module.css';
import { Link } from 'react-router-dom';
import tiktokLikes from '../../icons/tiktokLikes.svg';
import tiktokHoverLikes from '../../icons/tiktokLikesHover.svg';

import tiktokFolowers from '../../icons/tiktokFolowers.svg';
import tiktokFolowersHover from '../../icons/tiktokFolowersHover.svg';

import tiktokViews from '../../icons/tiktokViews.svg';
import tiktokViewsHover from '../../icons/tiktokViewsHover.svg';

export default function Available() {
  return (
    <section id="my-section" className={css.availableSection}>
      <div className="section-title">
        Available on <span className="pinkText">StellarLikes</span>
      </div>

      <p className={css.availableText}>
        Whether you’re looking to get your followers growing, your likes flowing
        or views going — Stormlikes is your #1 option. Premium results, without
        the price tag.
      </p>

      <div className={css.availableLinkBlock}>
        <Link
          className={`${css.availableLink} ${css.violetBorder}`}
          to="/tikTokLikes"
        >
          <div className={css.availableLinkWrap}>
            <img
              src={tiktokLikes}
              alt="tiktokViews"
              className={css.mainImage}
            />
            <img
              src={tiktokHoverLikes}
              alt="tiktokViews"
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
          to="/tikTokViews"
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
          to="/tikTokViews"
        >
          <div className={css.availableLinkWrap}>
            <img
              src={tiktokFolowers}
              alt="tiktokViews"
              className={css.mainImage}
            />
            <img
              src={tiktokFolowersHover}
              alt="tiktokViews"
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
