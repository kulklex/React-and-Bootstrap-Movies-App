import { movies } from "../Movies/getMovies";
import "./banner.css"
import React from "react";

export default function Banner() {
  let movie = movies.results[0]
  if (movie === "" || movie.length === 0) {
    return (<>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading....</span>
      </div>
    </>);
  } else {
    return (<>
      <div className="card bannerCard banner-card">
        <img className="card-img-top bannerImg banner-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
          <h1 className="card-title bannerTitle banner-title">{movie.original_title}</h1>
          <p className="card-text bannerText banner-text">
            {movie.overview}
          </p>
      </div>
   </> );
  }
}
