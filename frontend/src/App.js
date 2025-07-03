import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Damilola Movie Finder 🎬</h1>
        <p>Discover trending movies, search by title, and manage your personal watchlist.</p>
      </header>

      <section className="features">
        <h2>✨ Key Features</h2>
        <ul>
          <li>🔍 Search movies by name using the TMDb API</li>
          <li>📃 View detailed movie information (title, poster, rating, overview)</li>
          <li>💾 Add and remove movies from your personal watchlist</li>
          <li>🔐 Secure authentication with login/register</li>
        </ul>
      </section>

      <section className="about">
        <h2>👨‍💻 About This App</h2>
        <p>
          This project was built with React, Node.js, Express, and PostgreSQL as part of my full-stack learning journey.
          It demonstrates how to build modern web apps with API integration and user authentication.
        </p>
      </section>

      <footer className="contact">
        <h2>📬 Contact</h2>
        <p>Email: <a href="mailto:olatunjiayokanmii@gmail.com">olatunjiayokanmii@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Ayokanmii" target="_blank" rel="noopener noreferrer">Ayokanmii</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/olatunjiayokanmi" target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </footer>
    </div>
  );
}

export default App;
