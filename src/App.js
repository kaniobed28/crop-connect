import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farmer from './pages/Farmer';
import About from './pages/About';
import Market from './pages/Market';
import DeliveryService from './pages/DeliveryService';
import Services from './pages/Services'; // Import the new Services page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<Market />} />
        <Route path="/delivery-service" element={<DeliveryService />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;