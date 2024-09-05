import React from 'react';
import css from './Faq.module.css';
import faqIcon from '../../icons/faq-icon.svg';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`${css.faq} ${faq.open ? css.open : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={css.faqContent}>
        <div className={css.faqQuestionWrap}>
          <div className={css.faqTitle}>{faq.question}</div>
          <img className={css.faqImage} src={faqIcon} alt="faqIcon" />
        </div>

        <div className={css.faqAnswer}>{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
