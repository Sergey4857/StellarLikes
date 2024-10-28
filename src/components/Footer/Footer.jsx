import { Link, useLocation } from 'react-router-dom';
import css from './Footer.module.css';
import footerLogo from '../../icons/footer-logo.svg';

const Footer = () => {
  const location = useLocation();

  const footerColorClass = () => {
    if (location.pathname.includes('/buy-tiktok-followers')) {
      return css.footerOrange;
    } else if (location.pathname.includes('/buy-tiktok-views')) {
      return css.footerGreen;
    } else {
      return '';
    }
  };
  const handleLiveSupportClick = e => {
    e.preventDefault();
    if (window.Intercom) {
      window.Intercom('show');
    } else {
      console.error('Intercom is not initialized.');
    }
  };

  return (
    <footer className={`${css.footerSection} ${footerColorClass()}`}>
      <div className={css.footer}>
        <div className={css.footerLogo}>
          <img src={footerLogo} alt="" />
          stellar<span>likes</span>
        </div>

        <div className={css.footerBlock}>
          <nav className={css.footerNav}>
            <Link className={css.footerNavLink} to="/">
              Home
            </Link>
            <Link className={css.footerNavLink} to="/Reviews">
              Reviews
            </Link>
            <Link className={css.footerNavLink} to="/about">
              About us
            </Link>
            <Link className={css.footerNavLink} to="/contact-us">
              Contact us
            </Link>
            <Link
              className={css.footerNavLink}
              to="#"
              onClick={handleLiveSupportClick}
            >
              Live Support
            </Link>
          </nav>

          <nav className={css.footerSoonNav}>
            <Link to="/">
              TikTok Video Downloader
              <span className={css.soon}>soon</span>
            </Link>
            <Link to="/">
              TikTok Video Viewer
              <span className={css.soon}>soon</span>
            </Link>
            <Link to="/">
              TikTok Earning Calculator
              <span className={css.soon}>soon</span>
            </Link>
            <Link to="/">
              TikTok Counter
              <span className={css.soon}>soon</span>
            </Link>
            <Link to="/">
              TikTok Link to MP4 Converter
              <span className={css.soon}>soon</span>
            </Link>
          </nav>

          <nav className={css.footerNav}>
            <Link className={css.footerNavLink} to="/">
              Buy TikTok Likes
            </Link>
            <Link className={css.footerNavLink} to="/buy-tiktok-followers">
              Buy TikTok Followers
            </Link>
            <Link className={css.footerNavLink} to="/buy-tiktok-views">
              Buy TikTok Views
            </Link>
          </nav>
        </div>

        <div className={css.footerDecor}></div>

        <div className={css.footerPrivacyBlock}>
          <div className={css.footerPrivacy}>
            2024 Stellarlikes — All Rights Reserved
          </div>
          <div className={css.footerPrivacyLinks}>
            <Link className={css.footerNavLink} to="/terms-of-use">
              Terms of Use
            </Link>
            <Link className={css.footerNavLink} to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
