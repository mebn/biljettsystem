import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens and routes
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PurchaseComplete from './pages/PurchaseComplete/PurchaseComplete';
import Event from './pages/Event/Event'
import EventTransaction from './pages/EventTransaction/EventTransaction';
import EventTransactionAlpha from './pages/EventTransaction/EventTransactionAlpha';
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from "react-redux";
import { setLoggedIn } from "./redux/loggedIn";

const App = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = () => {
      fetch("/api/auth/login/success")
        .then(res => res.json())
        .then(data => {
          if (data.ok) {
            setUser(data.user);
            dispatch(setLoggedIn(data.user));
          }
        });
    }
    getUser();
  }, [user]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:eventId" element={<Event />} />
          <Route path="/event/:eventId/book" element={<EventTransaction />} />
          <Route path="/event/:eventId/purchase" element={<EventTransactionAlpha />} />
          <Route path="/purchase-complete/:eventId" element={<PurchaseComplete />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;