import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farmer from './pages/Farmer';
import BecomeAFarmer from './pages/BecomeAFarmer';
import Market from './pages/Market';
import About from './pages/About';

import Login from './pages/Login';
import DeliveryService from './pages/DeliveryService';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/become-a-farmer" element={<BecomeAFarmer />} />
        <Route path="/market" element={<Market />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery-service" element={<DeliveryService />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;