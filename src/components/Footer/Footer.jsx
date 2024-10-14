import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import logo from '../../icons/logo.svg';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const links = document.querySelectorAll(`.${css.ratingLink}`);

    links.forEach(link => {
      const decorItems = link.querySelectorAll(`.${css.decorItem}`);

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

      // Store handlers for cleanup
      link._handleMouseEnter = handleMouseEnter;
      link._handleMouseLeave = handleMouseLeave;
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', link._handleMouseEnter);
        link.removeEventListener('mouseleave', link._handleMouseLeave);
      });
    };
  }, []);

  return (
    <footer className={css.footerSection} ref={sectionRef}>
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
                <Link className={css.footerNavLink} to="/Reviews">
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
                <Link
                  className={`${css.ratingLink} ${css.buyBlockLinkPink}`}
                  to="/"
                >
                  <span className={css.linkText}>Buy Likes</span>
                  <span className={css.decor}>
                    <span className={css.decorItem}></span>
                    <span className={css.decorItem}></span>
                  </span>
                </Link>
                <span className={css.buyBlockSpan}>Starting at $0.5</span>
              </div>
              <div className={css.buyBlockContent}>
                <Link
                  className={`${css.ratingLink} ${css.buyBlockLinkGreen}`}
                  to="/buy-tiktok-views"
                >
                  <span className={css.linkText}>Buy Views</span>
                  <span className={css.decor}>
                    <span className={css.decorItem}></span>
                    <span className={css.decorItem}></span>
                  </span>
                </Link>

                <span className={css.buyBlockSpan}>Starting at $0.89</span>
              </div>
              <div className={css.buyBlockContent}>
                <Link
                  className={`${css.ratingLink} ${css.buyBlockLinkOrange}`}
                  to="/buy-tiktok-followers"
                >
                  <span className={css.linkText}>Buy Followers</span>
                  <span className={css.decor}>
                    <span className={css.decorItem}></span>
                    <span className={css.decorItem}></span>
                  </span>
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
