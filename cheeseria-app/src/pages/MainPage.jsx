import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheesePage from './CheesePage';
import PageNotFound from './PageNotFound';

const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CheesePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default MainPage;
