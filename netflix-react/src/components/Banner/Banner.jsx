import React, { useEffect, useState } from "react";
import requests from "../../utils/requests";
import axios from "../../utils/axios";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Error fetching movie:", error);
      }
    })();
  }, []);

  const truncate = (str, num) => {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  };

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button play">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner__fadeBottom" />
      </div>
    </>
  );
};

export default Banner;
