
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import MovieSearch from './pages/MovieSearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<MovieSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
