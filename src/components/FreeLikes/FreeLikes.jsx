import { useState } from 'react';
import css from './FreeLikes.module.css';

const FreeLikes = () => {
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
    <section className={css.freeLikesSection} id="my-section">
      <div className={css.freeLikesWrap}>
        <div className={css.freeLikesTitle}>
          <span className={css.freeLikesSpan}>Get 50 Free</span> TikTok Likes
        </div>
        <p className={css.freeLikesText}>
          Receive free TikTok views every 24 hours: just submit your 
          <span>username</span> and <span>email</span>, select post, verify your
          valid email, and get likes quickly.
        </p>
        <form className={css.freeLikesForm} onSubmit={handleSubmit}>
          <div className={`${css.freeLikesFormBlock} ${css.FirstBlock}`}>
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
          <div className={css.freeLikesFormBlock}>
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
          <button className={css.freeLikesButton} type="submit">
            Get Free Likes
          </button>
        </form>
      </div>
    </section>
  );
};

export default FreeLikes;
