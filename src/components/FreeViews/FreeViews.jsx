import { useEffect, useRef, useState } from 'react';
import css from './FreeViews.module.css';
import { gsap } from 'gsap';
import FreeViewsImage from '../../icons/alien.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import TikTokUserDetails from 'Api/TikTokUserDetails';
import checkmark from '../../icons/checkmark-getStarted.svg';

const FreeViews = ({ data }) => {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const validateEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const linkRef = useRef(null);
  const featuresRef = useRef(null);

  console.log(data);

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

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Please enter your TikTok username.';
    }

    if (!userEmail.trim()) {
      newErrors.userEmail = 'Please enter your email';
    } else if (!validateEmail(userEmail)) {
      newErrors.userEmail = 'Please enter a valid email address..';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setApiError(null);
    setUserInfo(null);
    setLoading(true);

    try {
      const userData = await TikTokUserDetails(username);
      console.log(userData);

      setUserInfo(userData);
      setLoading(false);
    } catch (error) {
      setApiError(error.message);
      setLoading(false);
    }
  };

  return (
    <section className={css.freeViewsSection} id="freeViews">
      <div className={css.freeViews} ref={featuresRef}>
        <div className={css.freeViewsWrap}>
          <h2 className={css.freeViewsTitle}>
            <span className={css.freeViewsSpan}>Get 50 Free</span> TikTok Views
          </h2>
          <p className={css.freeViewsText}>
            Receive free TikTok views every 24 hours: just submit your 
            <span>username</span> and <span>email</span>, select post, verify
            your valid email, and get likes quickly.
          </p>
          <form className={css.getStartedForm} onSubmit={handleSubmit}>
            <div className={css.inputsBlock}>
              <div className={css.userBlock}>
                <label htmlFor="userName">Your TikTok Username</label>
                <input
                  id="userName"
                  type="text"
                  placeholder="therock"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                {errors.username && (
                  <div className={css.error}>{errors.username}</div>
                )}
                {apiError && <div className={css.error}>{apiError}</div>}
              </div>

              <div className={css.userBlock}>
                <label htmlFor="userEmail">Your Email</label>
                <input
                  id="userEmail"
                  type="text"
                  placeholder="email@example.com"
                  value={userEmail}
                  onChange={e => setUserEmail(e.target.value)}
                />
                {errors.userEmail && (
                  <div className={css.error}>{errors.userEmail}</div>
                )}
              </div>
            </div>

            <button type="submit" className={css.freeViewsButton} ref={linkRef}>
              <span className={css.linkText}>Get Free Views</span>
              {loading && <div className={css.loader}></div>}
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

            {userInfo &&
              userInfo.map(
                ({ profile_pic_url, full_name, id, uniqueId, country }) => (
                  <div key={id} className={css.findedUserWrap}>
                    <img
                      className={css.findedUserImage}
                      src={profile_pic_url}
                      alt="profile"
                    />
                    <div className={css.findedUserName}>{full_name}</div>
                    <button
                      className={css.getStartedRedirect}
                      onClick={() => {
                        navigate('/freeViews/select-post', {
                          state: {
                            quantity: 50,
                            service_type: 'tiktok_views',
                            productId: data.id,
                            email: userEmail,
                            page_link: 'stellarlikes.com',
                            customLink: `https://www.tiktok.com/@${uniqueId}`,
                            userInfo,
                            uniqueId,
                          },
                        });
                      }}
                    >
                      <img src={checkmark} alt="" />
                    </button>
                  </div>
                )
              )}
          </form>
          <img
            data-animate
            alt="Views"
            className={css.FreeImage}
            src={FreeViewsImage}
          />
        </div>
      </div>
    </section>
  );
};

export default FreeViews;
