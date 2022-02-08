import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens and routes
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ExamplePage from './pages/ExamplePage/ExamplePage';
import ApiTesting from './pages/ApiTesting/ApiTesting';
import Event from './pages/Event/Event'
import EventTransaction from './pages/EventTransaction/EventTransaction';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examplePage" element={<ExamplePage />} />
        <Route path="/apiTesting" element={<ApiTesting />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/event/:eventId/book" element={<EventTransaction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;