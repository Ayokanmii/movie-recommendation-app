import React from 'react';
import './Watchlist.css';

const sampleWatchlist = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
  },
  {
    id: 2,
    title: "The Lion King",
    genre: "Animation",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    rating: "9.0",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Thriller",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: 5,
    title: "Spirited Away",
    genre: "Animation",
    rating: "8.6",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMySGzgbqnxjZa2.jpg"
  },
  {
    id: 6,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: "8.6",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  }
];

function Watchlist() {
  return (
    <div className="watchlist-container">
      <h2>🎥 Your Watchlist</h2>
      <div className="watchlist-grid">
        {sampleWatchlist.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>⭐ Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;