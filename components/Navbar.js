// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎬 Damilola Movie Finder</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ai-recommendations">AI Recommender</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
