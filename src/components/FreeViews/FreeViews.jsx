import { useState } from 'react';
import css from './FreeViews.module.css';

const FreeViews = () => {
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
    <section className={css.freeViewsSection} id="my-section">
      <div className={css.freeViews}>
        <div className={css.freeViewsWrap}>
          <div className={css.freeViewsTitle}>
            <span className={css.freeViewsSpan}>Get 50 Free</span> TikTok
            Followers
          </div>
          <p className={css.freeViewsText}>
            Receive free TikTok views every 24 hours: just submit your 
            <span>username</span> and <span>email</span>, select post, verify
            your valid email, and get likes quickly.
          </p>
          <form className={css.freeViewsForm} onSubmit={handleSubmit}>
            <div className={`${css.freeViewsFormBlock} ${css.FirstBlock}`}>
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
            <div className={css.freeViewsFormBlock}>
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
            <button className={css.freeViewsButton} type="submit">
              Get Free Followers
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeViews;
