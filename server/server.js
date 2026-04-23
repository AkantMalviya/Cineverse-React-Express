import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 5000;
const BASE_URL = "https://api.themoviedb.org/3";

console.log("API KEY:", process.env.TMDB_API_KEY);

// Home Page
app.get("/", (req, res) => {
  res.send("🎬 CineVerse API is running...");
});

// Now Playing
app.get("/api/movies/now_playing", async (req, res) => {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();
  res.json(data);
});

// Popular
app.get("/api/movies/popular", async (req, res) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();
  res.json(data);
});

// Top Rated
app.get("/api/movies/top_rated", async (req, res) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();
  res.json(data);
});

// Upcoming
app.get("/api/movies/upcoming", async (req, res) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();
  res.json(data);
});

// Search
app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`,
  );
  const data = await response.json();
  res.json(data);
});

// Movie Details
app.get("/api/movie/:id", async (req, res) => {
  const { id } = req.params;

  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
