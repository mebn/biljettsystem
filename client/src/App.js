import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens and routes
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PurchaseComplete from './pages/PurchaseComplete/PurchaseComplete';
import Event from './pages/Event/Event'
import EventTransaction from './pages/EventTransaction/EventTransaction';
import EventTransactionAlpha from './pages/EventTransaction/EventTransactionAlpha';
import Navbar from './components/Navbar/Navbar';


const App = () => (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/event/:eventId/book" element={<EventTransaction />} />
        <Route path="/event/:eventId/purchase" element={<EventTransactionAlpha/>} />
        <Route path="/purchase-complete/:eventId" element={<PurchaseComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

export default App;