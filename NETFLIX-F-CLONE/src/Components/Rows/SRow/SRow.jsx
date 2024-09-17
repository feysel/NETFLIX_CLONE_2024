import React, { useState, useEffect } from "react";
import axios from "../../../axios.jsx";
import "../../../Components/Rows/SRow/srow.css";
const baseURL = "https://image.tmdb.org/t/p/original/";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function SRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
          const urlParser = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParser.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  console.log(trailerUrl);
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}
export default SRow;

/* useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.lenght)
        ]
      );
      return requests;
    }

    fetchData();
  }, []);*/
