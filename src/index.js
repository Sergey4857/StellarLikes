import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { IntercomProvider } from 'react-use-intercom'; // Import IntercomProvider
import './index.css';
const INTERCOM_APP_ID = 'lk2bf6cz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntercomProvider>
);
