 import React from 'react';

function Home() {
  return (
    <div>
      <header className="header">
        <h1>Damilola Movie Finder 🎬</h1>
        <p>Discover trending movies, search by title, and manage your personal watchlist.</p>
      </header>

      <section className="features">
        <h2>✨ Key Features</h2>
        <ul>
          <li>🔍 Search movies by name using the TMDb API</li>
          <li>📃 View detailed movie info</li>
          <li>💾 Add/remove movies from your personal watchlist</li>
          <li>🔐 Secure login/register</li>
          <li>🤖 AI-based movie recommendations</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
