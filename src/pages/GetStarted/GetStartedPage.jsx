import { useNavigate } from 'react-router-dom';
import css from './GetStarted.module.css';
import { useState } from 'react';
import TikTokUserDetails from 'Api/TikTokUserDetails';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleUserSelect = uniqueId => {
    navigate('/selectPost', { state: { uniqueId } });
  };

  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);
  return (
    <>
      <div className={css.getStartedWrap}>
        <div className={css.liveBlock}>
          <span className={css.liveNumber}>451</span>
          Live users checking out
        </div>

        <form
          className={css.getStartedForm}
          onSubmit={e => {
            e.preventDefault();
            const username = document.getElementById('userName').value;
            if (!username) {
              alert('Please enter a valid TikTok username.');
              return;
            }
            TikTokUserDetails(username, setUserInfo);
          }}
        >
          <div className={css.getStartedFormTitle}>
            Enter Your
            <span className={css.getStartedSpan}>Order Details</span>
          </div>
          <div className={css.inputsBlock}>
            <div className={css.userBlock}>
              <label htmlFor="userName">Your TikTok Username</label>
              <input id="userName" type="text" placeholder="therock" />
            </div>

            <div className={css.userBlock}>
              <label htmlFor="userEmail">Your Email</label>
              <input
                id="userEmail"
                type="text"
                placeholder="email@example.com"
              />
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
                  onClick={() => handleUserSelect(uniqueId)}
                >
                  Select
                </button>
              </div>
            ))}
        </form>
      </div>
    </>
  );
};

export default GetStarted;
