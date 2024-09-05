import css from './Faq.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FAQ from './Faq';

export default function FaqBlock() {
  const [faqs, setFaqs] = useState([
    {
      question: 'What payment methods do you accept?',
      answer:
        'On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option. On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option.',
      open: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option. On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option.',
      open: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option. On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option.',
      open: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option. On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option.',
      open: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option. On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option.',
      open: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option. On Stormlikes you can pay using all major credit and debit cards. This includes cards issued by VISA, Mastercard, and AMEX. On top of that, if you are using a compatible device you will also get an option to pay using Apple Pay which is a very convenient option.',
      open: false,
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <section className={css.faqSection}>
      <div className="section-title">Questions? Let's answer them!</div>

      <p className={css.faqText}>
        If you need more help, make sure to click to get help from our{' '}
        <Link className={css.faqLink} to="/">
          live support.
        </Link>
      </p>

      <div className={css.faqWrap}>
        <div className={css.faqs}>
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    </section>
  );
}
