import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <img
        src="/logo.png"
        alt="WatchWise Logo"
        className="logo"
        onError={(e) => {
          e.target.src =
            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"%3E%3Crect width="120" height="120" fill="%231c1c1e"/%3E%3Ctext x="60" y="60" font-family="Segoe UI, sans-serif" font-size="20" font-weight="bold" fill="%23f5f5f7" text-anchor="middle" dy=".3em"%3EWatchWise%3C/text%3E%3Ccircle cx="60" cy="40" r="15" fill="%23ff4c4c"/%3E%3Cpolygon points="55,35 65,35 60,45" fill="%23f5f5f7"/%3E%3C/svg%3E';
        }}
      />
      <h1>🎬 Welcome to WatchWise</h1>
      <p>Explore, discover, and save your favorite movies with AI-powered recommendations.</p>
      <div className="nav-buttons">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Home;