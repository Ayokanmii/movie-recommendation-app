import React, { useState } from "react";
import "./AIRecommendations.css"; // Optional: For custom styling

const AIRecommendations = () => {
  const [preferences, setPreferences] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRecommendations([]);

    try {
      const response = await fetch("https://your-backend-url/api/ai/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preferences }),
      });

      const data = await response.json();
      setRecommendations(data.recommendations || []);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }

    setLoading(false);
  };

  return (
    <div className="ai-recommender">
      <h2>🎥 AI Movie Recommender</h2>
      <p>Describe what kind of movies you like and get smart suggestions!</p>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="e.g. romantic comedies, sci-fi thrillers, superhero movies..."
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          rows={4}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Recommending..." : "Get Recommendations"}
        </button>
      </form>

      {recommendations.length > 0 && (
        <div className="results">
          <h3>Recommended Movies:</h3>
          <ul>
            {recommendations.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AIRecommendations;
