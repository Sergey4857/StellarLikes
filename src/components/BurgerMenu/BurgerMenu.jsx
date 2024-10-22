import { createPortal } from 'react-dom';
import { useState } from 'react';
import css from './BurgerMenu.module.css';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const [activeBlockIndex, setActiveBlockIndex] = useState(null); // Изначально нет активного блока
  const burgerRoot = document.querySelector('#burger-root');

  const toggleBlock = index => {
    setActiveBlockIndex(prevIndex => (prevIndex === index ? null : index));
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
        { to: '/PrivacyPolicy', text: 'Privacy Policy' },
        { to: '/TermsOfUse', text: 'Terms of Use' },
        { to: '/', text: 'Live Support' },
      ],
    },
  ];

  // Проверяем, существует ли элемент #burger-root
  if (!burgerRoot) return null;

  return createPortal(
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
    </div>,
    burgerRoot
  );
}
