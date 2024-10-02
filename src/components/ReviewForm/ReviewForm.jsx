import React, { useState } from 'react';
import css from './Review.module.css';

const ReviewForm = ({ setShowReviewForm }) => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form className={css.ReviewForm} onSubmit={handleSubmit}>
          <button
            type="button"
            className={css.ReviewCloseButton}
            onClick={() => setShowReviewForm(false)}
          ></button>

          <div className={css.ReviewFormBlock}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div className={css.ReviewFormBlock}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className={css.ReviewFormBlock}>
            <label htmlFor="review">Your review</label>
            <textarea
              id="review"
              name="review"
              placeholder="Your review"
              required
            />
          </div>

          <div className={css.ratingWrap}>
            <span className={css.ratingSpan}>Rating</span>
            <div className={css.ratingBlock}>
              {[1, 2, 3, 4, 5].map(star => (
                <div
                  key={star}
                  className={`${css.star} ${rating >= star ? css.filled : ''}`}
                  onClick={() => setRating(star)}
                ></div>
              ))}
              <div className={css.ratingCounter}>{rating}/5</div>
            </div>
          </div>

          <button className={css.reviewSubmit} type="submit">
            Submit Review
          </button>
        </form>
      ) : (
        <div className={css.reviewThank}>Thanks for your review</div>
      )}
    </div>
  );
};

export default ReviewForm;
