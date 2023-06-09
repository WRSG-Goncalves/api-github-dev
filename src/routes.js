import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPage from './pages/Repositories/RepositoriesPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
