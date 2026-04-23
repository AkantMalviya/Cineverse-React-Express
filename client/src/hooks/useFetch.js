import { useState, useEffect } from "react";
import { BASE_URL } from "../config";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        let url = "";

        if (queryTerm) {
          url = `${BASE_URL}/api/search?q=${queryTerm}`;
        } else {
          url = `${BASE_URL}${apiPath}`; // e.g. /api/movies/popular
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
