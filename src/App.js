import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farmer from './pages/Farmer';
import BecomeAFarmer from './pages/BecomeAFarmer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/become-a-farmer" element={<BecomeAFarmer />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;