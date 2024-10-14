import css from './Faq.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FAQ from './Faq';

export default function FaqBlock({ faqsData }) {
  const [faqs, setFaqs] = useState(
    faqsData && faqsData.map(faq => ({ ...faq, open: false }))
  );

  const toggleFAQ = index => {
    faqsData &&
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
      <h2 className="section-title">Questions? Let's answer them!</h2>

      <p className={css.faqText}>
        If you need more help, make sure to click to get help from our{' '}
        <Link className={css.faqLink} to="/">
          live support.
        </Link>
      </p>

      <div className={css.faqWrap}>
        <div className={css.faqs}>
          {faqs &&
            faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
        </div>
      </div>
    </section>
  );
}
