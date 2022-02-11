import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens and routes
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ExamplePage from './pages/ExamplePage/ExamplePage';
import ApiTesting from './pages/ApiTesting/ApiTesting';
import PurchaseComplete from './pages/PurchaseComplete/PurchaseComplete';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example-page" element={<ExamplePage />} />
        <Route path="/api-testing" element={<ApiTesting />} />
        <Route path="/purchase-complete" element={<PurchaseComplete />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;