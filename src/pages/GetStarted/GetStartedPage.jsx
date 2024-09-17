import { useLocation, useNavigate } from 'react-router-dom';
import css from './GetStarted.module.css';
import { useState } from 'react';
import TikTokUserDetails from 'Api/TikTokUserDetails';
import checkmark from '../../icons/checkmark-getStarted.svg';

const GetStarted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPrice } = location.state || {};
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

          <button type="submit" className={css.getStartedSubmit}>
            Continue
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
                    if (productPath === 'tikTokFollowers') {
                      navigate(`/${productPath}/checkout`, {
                        state: {
                          selectedPrice,
                          uniqueId,
                          userInfo,
                          userEmail,
                        },
                      });
                    } else {
                      navigate('selectPost', {
                        state: {
                          selectedPrice,
                          uniqueId,
                          userInfo,
                          userEmail,
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
