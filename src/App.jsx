import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import UnprocessedProducts from './pages/UnprocessedProducts';
import ProcessedProducts from './pages/ProcessedProducts';
import RecyclingMaterials from './pages/RecyclingMaterials';
import Enquiry from './pages/Enquiry';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unprocessed" element={<UnprocessedProducts />} />
        <Route path="/processed" element={<ProcessedProducts />} />
        <Route path="/recycling" element={<RecyclingMaterials />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;


