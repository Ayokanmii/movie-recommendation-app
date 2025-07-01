
import React, { useState } from 'react';
import axios from 'axios';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`);
    setMovies(res.data.results);
  };

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search movies..." />
      <button onClick={searchMovies}>Search</button>
      <ul>{movies.map(movie => <li key={movie.id}>{movie.title}</li>)}</ul>
    </div>
  );
}

export default MovieSearch;
