import { useEffect, useRef, useState } from 'react';
import css from './FreeLikes.module.css';
import { gsap } from 'gsap';
import FreeLikesImage from '../../icons/robot.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FreeLikes = () => {
  const linkRef = useRef(null);
  const featuresRef = useRef(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const decorItemRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const link = linkRef.current;
    const decorItems = decorItemRefs.current;

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

    if (link) {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (link) {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    // Animation for images on scroll
    const images = featuresRef.current.querySelectorAll('[data-animate]');

    images.forEach(image => {
      gsap.fromTo(
        image,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 70%',
            end: 'top 30%',
          },
        }
      );
    });
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <section className={css.freeLikesSection} id="freeLikes">
      <div className={css.freeLikes} ref={featuresRef}>
        <div className={css.freeLikesWrap}>
          <div className={css.freeLikesTitle}>
            <span className={css.freeLikesSpan}>Get 50 Free</span> TikTok Likes
          </div>
          <p className={css.freeLikesText}>
            Receive free TikTok views every 24 hours: just submit your 
            <span>username</span> and <span>email</span>, select post, verify
            your valid email, and get likes quickly.
          </p>
          <form className={css.freeLikesForm} onSubmit={handleSubmit}>
            <div className={`${css.freeLikesFormBlock} ${css.FirstBlock}`}>
              <label htmlFor="username">Your TikTok Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="therock"
              />
            </div>
            <div className={css.freeLikesFormBlock}>
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
              />
            </div>

            <a href="#freeLikes" className={css.freeLikesButton} ref={linkRef}>
              <span className={css.linkText}>Get 50 Free Likes</span>
              <span className={css.decor}>
                <span
                  ref={el => (decorItemRefs.current[0] = el)}
                  className={css.decorItem}
                ></span>
                <span
                  ref={el => (decorItemRefs.current[1] = el)}
                  className={css.decorItem}
                ></span>
              </span>
            </a>
          </form>
          <img
            data-animate
            className={css.featuresImg}
            alt="Likes"
            src={FreeLikesImage}
          />
        </div>
      </div>
    </section>
  );
};

export default FreeLikes;
