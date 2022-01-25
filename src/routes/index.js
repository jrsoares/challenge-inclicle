import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
const Router = () => (
  <Routes>
    <Route exact path="/" element={<Dashboard/>} />
  </Routes>
);

export default Router;