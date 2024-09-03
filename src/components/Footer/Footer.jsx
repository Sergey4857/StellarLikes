import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import logo from '../../images/logo.png';
const Footer = () => {
  return (
    <footer className={css.footerSection}>
      <div className={css.footer}>
        <div className={css.footerWrap}>
          <div className={css.footerBlock}>
            <div className={css.footerInfo}>
              <div className={css.footerLogo}>
                <img className={css.footerImage} src={logo} alt="logo" />
                stellar<span className={css.FooterTitle}>likes</span>
              </div>
              <nav className={css.footerNav}>
                <Link className={css.footerNavLink} to="/">
                  Home
                </Link>
                <Link className={css.footerNavLink} to="/">
                  Reviews
                </Link>
                <Link className={css.footerNavLink} to="/">
                  TikTok Video Downloader
                </Link>
                <Link className={css.footerNavLink} to="/">
                  TikTok Story Viewer
                </Link>
                <Link className={css.footerNavLink} to="/">
                  Live Support
                </Link>
                <Link className={css.footerNavLink} to="/">
                  Privacy Policy
                </Link>
                <Link className={css.footerNavLink} to="/">
                  Terms of Use
                </Link>
              </nav>
            </div>

            <div className={css.buyBlock}>
              <div className={css.buyBlockContent}>
                <Link className={css.buyBlockLinkPink} to="/">
                  Buy Likes
                </Link>
                <span className={css.buyBlockSpan}>Starting at $0.5</span>
              </div>
              <div className={css.buyBlockContent}>
                <Link className={css.buyBlockLinkGreen} to="/">
                  Buy Views
                </Link>
                <span className={css.buyBlockSpan}>Starting at $0.89</span>
              </div>
              <div className={css.buyBlockContent}>
                <Link className={css.buyBlockLinkOrange} to="/">
                  Buy Followers
                </Link>
                <span className={css.buyBlockSpan}>Starting at $0.5</span>
              </div>
            </div>
          </div>
          <div className={css.footerPrivacy}>
            2024 Stellarlikes — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
