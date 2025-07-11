import axios from "axios";

export const getAIRecommendations = async (req, res) => {
  const { mood, genre } = req.body;

  try {
    const prompt = `Suggest 3 family-friendly movies for someone in the mood for '${mood}' and likes '${genre}' genre. Include title and a short description for each.`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto", // ✅ uses auto-router
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300            // ✅ prevents free account token overflow
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const aiMessage = response.data.choices[0].message.content;

    res.json({ success: true, recommendations: aiMessage });
  } catch (err) {
    console.error("❌ AI Recommender Error:", err.response?.data || err.message);
    res.status(500).json({ success: false, message: "AI recommendation failed." });
  }
};
