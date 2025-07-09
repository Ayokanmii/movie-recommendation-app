import React, { useState } from "react";
import axios from "axios";

const AIRecommendations = () => {
  const [genre, setGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRecommend = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/ai/recommend`,
        { genre }
      );
      setRecommendations(response.data.recommendations || []);
    } catch (error) {
      console.error("Recommendation error:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h2>🎬 AI Movie Recommender</h2>
      <p>Enter a genre (e.g., comedy, sci-fi, action) and let AI suggest great movies for you!</p>
      <input
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Enter movie genre"
      />
      <button onClick={handleRecommend} disabled={loading}>
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      <div className="results">
        <h3>Recommended Movies:</h3>
        <ul>
          {recommendations.map((movie, index) => (
            <li key={index}>🎥 {movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIRecommendations;
