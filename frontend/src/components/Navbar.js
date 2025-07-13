import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem('token'); // check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>🎬 WatchWise</div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        {user && (
          <>
            <NavLink to="/ai" onClick={() => setIsOpen(false)}>AI</NavLink>
            <NavLink to="/watchlist" onClick={() => setIsOpen(false)}>Watchlist</NavLink>
            <NavLink to="/profile" onClick={() => setIsOpen(false)}>Profile</NavLink>
            <NavLink to="/settings" onClick={() => setIsOpen(false)}>Settings</NavLink>
          </>
        )}
        {!user ? (
          <>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>
            <NavLink to="/register" onClick={() => setIsOpen(false)}>Register</NavLink>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
