import React, { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';

import { useScrollTop } from './hooks';

const App = memo(() => {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={<span>Loading~~~</span>}>
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
