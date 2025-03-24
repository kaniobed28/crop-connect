import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farmer from './pages/Farmer';
import About from './pages/About'; // Import the new About page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;