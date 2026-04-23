import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        let url = "";

        if (queryTerm) {
          url = `/api/search?q=${queryTerm}`;
        } else {
          url = apiPath; // e.g. /api/movies/popular
        }

        const response = await fetch(url);
        const json = await response.json();
        console.log("API URL:", url);
        console.log("API RESPONSE:", json);
        setData(json.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    fetchMovies();
  }, [apiPath, queryTerm]);

  return { data };
};
