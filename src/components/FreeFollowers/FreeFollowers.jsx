import { useEffect, useRef, useState } from 'react';
import css from './FreeFollowers.module.css';
import { gsap } from 'gsap';
import FreeFollowersImage from '../../icons/monkey.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import TikTokUserDetails from 'Api/TikTokUserDetails';
import { GetFreeGoods } from 'Api/GetFreeService';
import checkmark from '../../icons/checkmark-getStarted.svg';

const FreeFollowers = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const validateEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const linkRef = useRef(null);
  const featuresRef = useRef(null);

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
      newErrors.userEmail = 'Please enter a valid email address.';
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
      setUserInfo(userData);
    } catch (error) {
      setApiError(error.message);
    }
  };

  const handleGetFreeGoods = async fields => {
    const { customLink, email, page_link, productId, quantity, service_type } =
      fields;

    if (!productId) {
      setError('Product ID is not available yet. Please try again later.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await GetFreeGoods({
        custom_link: customLink,
        email,
        page_link,
        product_id: productId,
        quantity,
        service_type,
      });

      if (data) {
        navigate(`/OrderConfirmation?order_id=${data}`);
      } else {
        setError('Error retrieving the order ID.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
            Receive free TikTok views every 24 hours: just submit your{' '}
            <span>username</span> and <span>email</span>, select post, verify
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
          </form>

          {userInfo &&
            userInfo.map(user => (
              <div key={user.id} className={css.findedUserWrap}>
                <img
                  className={css.findedUserImage}
                  src={user.profile_pic_url}
                  alt="profile"
                />
                <div className={css.findedUserName}>{user.full_name}</div>
                <button
                  className={css.getStartedRedirect}
                  onClick={() => {
                    handleGetFreeGoods({
                      quantity: 50,
                      service_type: 'tiktok_followers',
                      productId: 22132,
                      email: userEmail,
                      page_link: 'stellarlikes.com',
                      customLink: `https://www.tiktok.com/@${user.uniqueId}`,
                    });
                  }}
                >
                  {!loading && <img src={checkmark} alt="" />}
                  {loading && <div className={css.loader}></div>}
                </button>
              </div>
            ))}

          {error && <p className={css.error}>{error}</p>}

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
