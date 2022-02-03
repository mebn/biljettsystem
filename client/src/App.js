import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// screens and routes
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ExamplePage from './pages/ExamplePage/ExamplePage';
import ApiTesting from './pages/ApiTesting/ApiTesting';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examplePage" element={<ExamplePage />} />
        <Route path="/apiTesting" element={<ApiTesting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default App;