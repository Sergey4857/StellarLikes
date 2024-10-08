import React, { useEffect, useRef, useState } from 'react';
import css from './Review.module.css';
import { gsap } from 'gsap';

const ReviewForm = ({ setShowReviewForm }) => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

          <button className={css.reviewSubmit} type="submit" ref={linkRef}>
            <span className={css.linkText}> Submit Review</span>
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
      ) : (
        <div className={css.reviewThank}>Thanks for your review</div>
      )}
    </div>
  );
};

export default ReviewForm;
