import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <img src="/logo.png" alt="WatchWise Logo" className="logo" />

      <h1>🎬 Welcome to WatchWise</h1>
      <p>Explore, discover, and save your favorite movies with AI-powered recommendations.</p>

      <div className="nav-buttons">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/ai">AI Recommender</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </div>
  );
}

export default Home;
