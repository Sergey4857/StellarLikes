import React, { useEffect, useRef, useState } from 'react';
import css from './ContactUs.module.css';
import { gsap } from 'gsap';

const ContactUs = () => {
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
    <section className={css.contactSection}>
      <div className={css.TitleBlock}>
        <h1 className={css.contactTitle}>
          Get in Touch <span className={css.contactIcon}></span>
        </h1>
        <div className={css.contactText}>
          If you have any questions about our <br />
          TikTok growth services, please send us a message below.
        </div>
      </div>

      {!isSubmitted ? (
        <form className={css.contactForm} onSubmit={handleSubmit}>
          <div className={css.contactFormBlock}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div className={css.contactFormBlock}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className={css.contactFormBlock}>
            <label htmlFor="contact">Message</label>
            <textarea
              id="contact"
              name="contact"
              placeholder="How we can help?"
              required
            />
          </div>

          <button className={css.contactSubmit} type="submit" ref={linkRef}>
            <span className={css.linkText}> Contact Us</span>
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
        <div className={css.contactThank}>Thanks for your message</div>
      )}
    </section>
  );
};

export default ContactUs;
