import { createPortal } from 'react-dom';
import { useState } from 'react';
import css from './BurgerMenu.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const [activeBlockIndex, setActiveBlockIndex] = useState(null);
  const burgerRoot = document.querySelector('#burger-root');

  const toggleBlock = index => {
    setActiveBlockIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const location = useLocation();

  const burgerColorClass = () => {
    if (location.pathname.includes('/buy-tiktok-followers')) {
      return css.burgerOrange;
    } else if (location.pathname.includes('/buy-tiktok-views')) {
      return css.burgerGreen;
    } else {
      return '';
    }
  };

  const menuItems = [
    {
      title: 'Services',
      links: [
        { to: '/', text: 'Buy TikTok', highlight: 'Likes' },
        {
          to: '/buy-tiktok-followers',
          text: 'Buy TikTok',
          highlight: 'Followers',
        },
        { to: '/buy-tiktok-views', text: 'Buy TikTok', highlight: 'Views' },
      ],
    },
    {
      title: 'Free Tools',
      links: [
        { to: '/', text: 'Free TikTok Video Downloader', soon: true },
        { to: '/', text: 'Free TikTok Likes', soon: true },
        { to: '/buy-tiktok-views', text: 'Free TikTok Views', soon: true },
        {
          to: '/buy-tiktok-followers#freeFollowers',
          text: 'Free TikTok Followers',
          soon: true,
        },
      ],
    },
    {
      title: 'About',
      links: [
        { to: '/privacy-policy', text: 'Privacy Policy' },
        { to: '/terms-of-use', text: 'Terms of Use' },
        { to: '/', text: 'Live Support' },
      ],
    },
  ];

  if (!burgerRoot) return null;

  return createPortal(
    <div className={`${css.BurgerBackdrop} ${burgerColorClass()}`}>
      <div className={css.BurgerNavWrap}>
        <div className={css.BurgerNav}>
          {menuItems.map((item, index) => (
            <div className={css.burgerWrapper} key={index}>
              <div
                className={`${css.blockTitle} ${
                  activeBlockIndex === index ? css.active : ''
                }`}
                onClick={() => toggleBlock(index)}
              >
                {item.title}
              </div>
              {activeBlockIndex === index && (
                <div className={css.burgerBlock}>
                  {item.links.map((link, linkIndex) => (
                    <Link
                      onClick={() => setOpenedModal(false)}
                      key={linkIndex}
                      className={css.burgerNavLink}
                      to={link.to}
                    >
                      <span
                        className={`${css.whiteText} ${
                          link.soon ? css.soon : ''
                        }`}
                      >
                        {link.text}
                      </span>{' '}
                      <span
                        className={`${
                          link.highlight === 'Likes' ? css.pinkText : ''
                        }${
                          link.highlight === 'Followers' ? css.orangeText : ''
                        } ${link.highlight === 'Views' ? css.greenText : ''}`}
                      >
                        {link.highlight}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>,
    burgerRoot
  );
}
