import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens and routes
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PurchaseComplete from './pages/PurchaseComplete/PurchaseComplete';
import PurchaseCompleteAlpha from './pages/PurchaseComplete/PurchaseCompleteAlpha';
import Event from './pages/Event/Event'
import EventTransaction from './pages/EventTransaction/EventTransaction';


const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/event/:eventId/book" element={<EventTransaction />} />
        <Route path="/purchase-complete/:eventId" element={<PurchaseComplete />} />
        <Route path="/purchase-complete-alpha/:eventId" element={<PurchaseCompleteAlpha />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;