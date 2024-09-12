import css from './Available.module.css';
import { Link } from 'react-router-dom';

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
          TikTok <span className={css.pink}>Likes</span>
        </Link>
        <Link
          className={`${css.availableLink} ${css.greenBorder}`}
          to="/tikTokViews"
        >
          TikTok <span className={css.green}>Views</span>
        </Link>
        <Link
          className={`${css.availableLink} ${css.orangeBorder}`}
          to="/tikTokFollowers"
        >
          {/* <img
            className={css.availableImg}
            src={TikTokFollowers}
            alt="Downloader"
          /> */}
          TikTok <span className={css.orange}>Followers</span>
        </Link>
      </div>
    </section>
  );
}
