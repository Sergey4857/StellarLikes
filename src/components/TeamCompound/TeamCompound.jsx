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
        <h2 className="section-title">Why Choose Us?</h2>
        <p className={css.teamText}>
          We’re not just another social media growth platform. StellarLikes is
          built around customization and transparency, providing only authentic
          interactions that enhance your reach and credibility. Our solutions
          are tailored to support meaningful growth, helping your content
          resonate with a genuine audience.
        </p>
        <div className={css.teamBox}>
          <div className={css.teamBoxContent}>
            <img className={css.teamImage} src={teamMonkey} alt="teamMonkey" />
            <p className={css.teamDescription}>
              With StellarLikes, you gain access to real growth strategies
              crafted by social media experts, designed to build genuine
              engagement and a loyal audience.
            </p>

            <p className={css.teamDescription}>
              Our streamlined process ensures that likes, views, and followers
              reach your profile quickly, giving you the visibility boost you
              need without delay.
            </p>
          </div>
        </div>

        <ul className={css.teamList}>
          <li className={css.teamItem}>
            <div className={`${css.teamImage1} ${css.teamBoxImage}`}></div>
            <h3 className={css.teamName}>Victor</h3>
            <div className={css.teamItemText}>
              As the customer success lead, Viktor ensures every purchase is
              smooth and satisfactory, providing guidance and answering any
              questions to help customers make informed choices.
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={`${css.teamImage2} ${css.teamBoxImage}`}></div>
            <h3 className={css.teamName}>Max</h3>
            <div className={css.teamItemText}>
              Max manages the quality and delivery process, overseeing that
              likes, views, and followers reach customers quickly and accurately
              for optimal growth impact.
            </div>
          </li>
          <li className={css.teamItem}>
            <div className={`${css.teamImage3} ${css.teamBoxImage}`}></div>
            <h3 className={css.teamName}>Alex</h3>
            <div className={css.teamItemText}>
              Alex supports customers post-purchase, offering insights and
              assistance to maximize engagement and make the most out of every
              StellarLikes service.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TeamCompound;
