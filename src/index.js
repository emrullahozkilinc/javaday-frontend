import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FormikTest from "./test/FormikTest";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <FormikTest/>
  </React.StrictMode>
);