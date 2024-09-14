import { useNavigate } from 'react-router-dom';
import css from './GetStarted.module.css';
import FetchInstagramDetails from 'Api/InstagramDetails';
import { useState } from 'react';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleUserSelect = id => {
    navigate('/selectPost', { state: { id } });
  };
  const [userInfo, setUserInfo] = useState(null);

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
            FetchInstagramDetails(username, setUserInfo);
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
          {/* <button
          className={css.getStartedSubmit}
          onClick={() => handleProductSelect('TikTok Likes Package')}
        >
          Continue
        </button> */}
          {userInfo && (
            <div className={css.findedUserWrap}>
              <img
                className={css.findedUserImage}
                src={userInfo.profile_pic_url}
                alt="profile"
              />
              <div className={css.findedUserName}>{userInfo.full_name}</div>
              <button
                className={css.getStartedRedirect}
                onClick={() => handleUserSelect(userInfo.pk_id)}
              >
                Select
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default GetStarted;
