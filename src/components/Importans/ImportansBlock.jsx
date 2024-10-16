import css from './Importans.module.css';
import { useState } from 'react';
import Importans from './Importans';

export default function ImportansBlock({ importansData }) {
  const [importans, setImportans] = useState(
    importansData.map(important => ({ ...important, open: false }))
  );

  const toggleImportans = index => {
    setImportans(prevState =>
      prevState.map((important, i) => ({
        ...important,
        open: i === index ? !important.open : false,
      }))
    );
  };

  return (
    <section className={css.importantSection}>
      <div className={css.importantWrap}>
        <div className={css.importans}>
          {importans.map((important, index) => (
            <Importans
              important={important}
              index={index}
              key={index}
              toggleImportans={toggleImportans}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
