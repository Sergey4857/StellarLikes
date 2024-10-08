import { useEffect, useRef, useState } from 'react';
import css from './FreeFollowers.module.css';
import { gsap } from 'gsap';

const FreeFollowers = () => {
  const linkRef = useRef(null);
  const decorItemRefs = useRef([]);

  useEffect(() => {
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
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

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
    <section className={css.freeFollowersSection} id="freeFollowers">
      <div className={css.freeFollowers}>
        <div className={css.freeFollowersWrap}>
          <div className={css.freeFollowersTitle}>
            <span className={css.freeFollowersSpan}>Get 50 Free</span> TikTok
            Followers
          </div>
          <p className={css.freeFollowersText}>
            Receive free TikTok views every 24 hours: just submit your 
            <span>username</span> and <span>email</span>, select post, verify
            your valid email, and get likes quickly.
          </p>
          <form className={css.freeFollowersForm} onSubmit={handleSubmit}>
            <div className={`${css.freeFollowersFormBlock} ${css.FirstBlock}`}>
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
            <div className={css.freeFollowersFormBlock}>
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
            <button
              className={css.freeFollowersButton}
              type="submit"
              ref={linkRef}
            >
              <span className={css.linkText}> Get Free Followers</span>
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
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeFollowers;
