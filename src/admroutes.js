import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const RepositoriesPage = lazy(() => import('./pages/Repositories/RepositoriesPage'));

export default function RoutesAdm() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:login/repositories" element={<RepositoriesPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
