import { useLocation, useNavigate } from 'react-router-dom';
import css from './GetStarted.module.css';
import { useEffect, useRef, useState } from 'react';
import TikTokUserDetails from 'Api/TikTokUserDetails';
import checkmark from '../../icons/checkmark-getStarted.svg';
import { gsap } from 'gsap';

const GetStarted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { quantity, productId } = location.state || {};

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
    <>
      <div className={css.getStartedWrap}>
        <div className={css.liveBlock}>
          <span className={css.liveNumber}>451</span>
          Live users checking out
        </div>

        <form className={css.getStartedForm} onSubmit={handleSubmit}>
          <div className={css.getStartedFormTitle}>
            Enter Your
            <span className={css.getStartedSpan}>Order Details</span>
          </div>
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

          <button type="submit" className={css.getStartedSubmit} ref={linkRef}>
            <span className={css.linkText}>Continue</span>
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
            userInfo.map(({ profile_pic_url, full_name, id, uniqueId }) => (
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
                          quantity,
                          productId,
                          userEmail,
                          customLink: `https://www.tiktok.com/${uniqueId}`,
                          shop_name: 'StellarLikes',
                        },
                      });
                    } else {
                      navigate('selectPost', {
                        state: {
                          quantity,
                          productId,
                          uniqueId,
                          userInfo,
                          userEmail,
                          customLink: `https://www.tiktok.com/${uniqueId}`,
                          shop_name: 'StellarLikes',
                        },
                      });
                    }
                  }}
                >
                  <img src={checkmark} alt="" />
                </button>
              </div>
            ))}
        </form>
      </div>
    </>
  );
};

export default GetStarted;
