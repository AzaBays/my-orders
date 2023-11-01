import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store';

import "./assets/style/css/grid.css";
import "./assets/style/css/reboot.css";
import "./assets/style/css/faicons.css";
import "./assets/style/scss/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

