import { createPortal } from 'react-dom';
import { useState } from 'react';
import css from './BurgerMenu.module.css';
import { Link } from 'react-router-dom';

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const burgerRoot = document.querySelector('#burger-root');

  const toggleBlock = index => {
    setActiveBlockIndex(activeBlockIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: 'Services',
      links: [
        { to: '/', text: 'Buy TikTok', highlight: 'Likes' },
        { to: '/tikTokFollowers', text: 'Buy TikTok', highlight: 'Followers' },
        { to: '/tikTokViews', text: 'Buy TikTok', highlight: 'Views' },
      ],
    },
    {
      title: 'Free Tools',
      links: [
        { to: '/', text: 'Free TikTok Video Downloader' },
        { to: '/', text: 'Free TikTok Likes' },
        { to: '/tikTokViews', text: 'Free TikTok Views' },
        { to: '/tikTokFollowers#freeFollowers', text: 'Free TikTok Followers' },
      ],
    },
    {
      title: 'About',
      links: [
        { to: '/', text: 'Privacy Policy' },
        { to: '/', text: 'Terms of Use' },
        { to: '/', text: 'Live Support' },
      ],
    },
  ];

  return createPortal(
    <div className={css.BurgerNavWrap}>
      <div
        className={css.BurgerNav}
        // onClick={() => {
        //   setOpenedModal(false);
        // }}
      >
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
                    onClick={() => {
                      setOpenedModal(false);
                    }}
                    key={linkIndex}
                    className={css.burgerNavLink}
                    to={link.to}
                  >
                    <span className={css.whiteText}>{link.text}</span>{' '}
                    <span
                      className={
                        link.highlight === 'Likes'
                          ? css.pinkText
                          : link.highlight === 'Followers'
                          ? css.orangeText
                          : link.highlight === 'Views'
                          ? css.greenText
                          : ''
                      }
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
