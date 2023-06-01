import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

import RepositoriesPage from "./pages/Repositories/RepositoriesPage";

export default function RoutesAdm() {
  return (
    <Router>
      <Routes>
        <Route path="/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Routes>
    </Router>
  );
}
