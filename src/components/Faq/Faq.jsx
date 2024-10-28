import React from 'react';
import css from './Faq.module.css';
import faqIcon from '../../icons/shuttle.svg';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`${css.faq} ${faq.open ? css.open : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className={css.faqContent}>
        <div className={css.faqQuestionWrap}>
          <h3 className={css.faqTitle}>{faq.question}</h3>

          <div className={css.faqImage}>
            <img src={faqIcon} alt="" />
          </div>
        </div>

        <div className={css.faqAnswer}>{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
