import React from 'react';
import ReactDOM from 'react-dom/client';
// router
import { HashRouter } from 'react-router-dom';
// store
import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from 'styled-components';

import App from '@/App';

// 默认样式重置
import 'normalize.css';
import './assets/css/index.less';
import theme from '@/assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
  // </React.StrictMode>
);
