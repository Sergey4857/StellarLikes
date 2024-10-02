import { useState } from 'react';
import css from './FreeFollowers.module.css';

const FreeFollowers = () => {
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
            <button className={css.freeFollowersButton} type="submit">
              Get Free Followers
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeFollowers;
