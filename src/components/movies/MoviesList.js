import React from "react";
import MoviesItem from "./MoviesItem";
import classes from "./MovieList.module.css";
export default function MoviesList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.map((m) => (
        <MoviesItem
          key={m.id}
          id={m.id}
          image={m.poster_path}
          title={m.title}
          rating={m.vote_average}
          description={m.overview}
        />
      ))}
    </ul>
  );
}
