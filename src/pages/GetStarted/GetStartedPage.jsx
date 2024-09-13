import { useNavigate } from 'react-router-dom';
import css from './GetStarted.module.css';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleProductSelect = product => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className={css.getStartedWrap}>
      <div className={css.liveBlock}>
        <span className={css.liveNumber}>451</span>
        Live users checking out
      </div>

      <form className={css.getStartedForm}>
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
            <input id="userEmail" type="text" placeholder="email@example.com" />
          </div>
        </div>

        <button
          className={css.getStartedSubmit}
          onClick={() => handleProductSelect('TikTok Likes Package')}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
