import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import CasualtiesPage from '../components/CasualtiesPage';
import ShakerTable from '../components/ShakerTable';
import ShakerTableOutput from '../components/ShakerTableOutput';
import Top1 from '../components/Top1';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/casualties-page" element={<CasualtiesPage />} />
        <Route path="/shakertable" element={<ShakerTable />} />
        <Route path="/shakertable-output" element={<ShakerTableOutput />} />
        <Route path="/top-10" element={<Top1 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
