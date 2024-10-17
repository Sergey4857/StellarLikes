import { useEffect, useRef, useState } from 'react';
import css from './FreeFollowers.module.css';
import { gsap } from 'gsap';
import FreeFollowersImage from '../../icons/monkey.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, useNavigate } from 'react-router-dom';
import TikTokUserDetails from 'Api/TikTokUserDetails';
import checkmark from '../../icons/checkmark-getStarted.svg';

const FreeFollowers = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { quantity, productId, price, productService } = location.state || {};

  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const pathname = location.pathname;
  const productPath = pathname.split('/')[1];
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

    try {
      const userData = await TikTokUserDetails(username);
      console.log(userData);

      setUserInfo(userData);
    } catch (error) {
      setApiError(error.message);
    }
  };

  return (
    <section className={css.freeFollowersSection} id="freeFollowers">
      <div className={css.freeFollowers} ref={featuresRef}>
        <div className={css.freeFollowersWrap}>
          <h2 className={css.freeFollowersTitle}>
            <span className={css.freeFollowersSpan}>Get 50 Free</span> TikTok
            Followers
          </h2>
          <p className={css.freeFollowersText}>
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

            <button
              type="submit"
              className={css.freeFollowersButton}
              ref={linkRef}
            >
              <span className={css.linkText}>Get Free Followers</span>
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
                        if (productPath === 'buy-tiktok-followers') {
                          navigate(`/${productPath}/checkout`, {
                            state: {
                              country,
                              price,
                              productService,
                              quantity,
                              productId,
                              userEmail,
                              customLink: `https://www.tiktok.com/${uniqueId}`,
                              shop_name: 'StellarFollowers.com',
                            },
                          });
                        } else {
                          navigate('selectPost', {
                            state: {
                              country,
                              price,
                              productService,
                              quantity,
                              productId,
                              uniqueId,
                              userInfo,
                              userEmail,
                              customLink: `https://www.tiktok.com/${uniqueId}`,
                              shop_name: 'StellarFollowers.com',
                            },
                          });
                        }
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
            alt="Followers"
            className={css.FreeFollowers}
            src={FreeFollowersImage}
          />
        </div>
      </div>
    </section>
  );
};

export default FreeFollowers;
