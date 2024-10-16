import React from 'react';
import css from './Importans.module.css';

const Importans = ({
  title,
  image,
  open,
  index,
  toggleImportans,
  children,
}) => {
  return (
    <div className={css.importantContent}>
      <div className={css.importantImage}>
        <img src={image} alt={title} />
      </div>
      <div className={css.importantDetails}>
        <div className={css.importantTitle}>{title}</div>
        <div className={`${css.importantText} ${open ? css.open : ''}`}>
          {children}
        </div>
        <button
          className={css.importantButton}
          onClick={() => toggleImportans(index)}
        >
          {open ? 'Less' : 'Read All'}
        </button>
      </div>
    </div>
  );
};

export default Importans;
