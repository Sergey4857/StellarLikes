import React, { useEffect, useRef } from 'react';
import css from './TeamCompound.module.css';

import teamMonkey from '../../icons/team-monkey.svg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamCompound = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    const images = teamRef.current.querySelectorAll('[data-animate]');

    images.forEach(image => {
      gsap.fromTo(
        image,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 95%',
            end: 'top 10%',
          },
        }
      );
    });
  }, []);

  return (
    <section className={css.team} ref={teamRef}>
      <div className={css.teamWrap}>
        <h2 className="section-title">
          So, why trust <span className={css.teamSpan}>StellarLikes?</span>
        </h2>
        <p className={css.teamText}>
          The experienced and dedicated StellarLikes team of social media
          professionals has earned the trust of hundreds of thousands of
          satisfied customers, by providing them with the most powerful organic
          account growth available anywhere. We’d love the opportunity to grow
          your social media presence and earn your trust as well. But we work to
          earn your trust another way, too.
        </p>
        <div className={css.teamBox}>
          <div className={css.teamBoxContent}>
            <img className={css.teamImage} src={teamMonkey} alt="teamMonkey" />
            <p className={css.teamDescription}>
              Besides being the only platform to provide real likes, views and
              followers, we're customizable and offer prices no one else can
              match.
            </p>

            <p className={css.teamDescription}>
              Besides being the only platform to provide real likes, views and
              followers, we're customizable and offer prices no one else can
              match.
            </p>
          </div>
        </div>

        <ul className={css.teamList}>
          <li className={css.teamItem}>
            <div className={`${css.teamImage1} ${css.teamBoxImage}`}></div>
            <h3 className={css.teamName}>Victor</h3>
            <div className={css.teamItemText}>
              Besides being the only platform to provide real likes, views and
              followers, we're customizable and offer prices no one else can
              match.
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={`${css.teamImage2} ${css.teamBoxImage}`}></div>
            <h3 className={css.teamName}>Max</h3>
            <div className={css.teamItemText}>
              Besides being the only platform to provide real likes, views and
              followers, we're customizable and offer prices no one else can
              match.
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={`${css.teamImage3} ${css.teamBoxImage}`}></div>
            <h3 className={css.teamName}>Alex</h3>
            <div className={css.teamItemText}>
              Besides being the only platform to provide real likes, views and
              followers, we're customizable and offer prices no one else can
              match.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TeamCompound;
