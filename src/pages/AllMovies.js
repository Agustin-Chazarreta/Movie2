import React from "react";
import MOVIE_DATA from "../moviesData.json";
import MoviesList from "../components/movies/MoviesList";
export default function Allmovies() {
  return (
    <section>
      <h1>All movies</h1> <MoviesList movies={MOVIE_DATA} />
    </section>
  );
}
