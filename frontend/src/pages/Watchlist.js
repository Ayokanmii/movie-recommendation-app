import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    async function fetchWatchlist() {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/watchlist', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setWatchlist(res.data);
      } catch (err) {
        console.error('Failed to fetch watchlist', err);
      }
    }

    fetchWatchlist();
  }, []);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {watchlist.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
