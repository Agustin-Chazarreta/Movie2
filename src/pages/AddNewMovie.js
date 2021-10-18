import React from "react";

import AddNewMovieForm from "../components/movies/AddNewMovieForm";
export default function AddNewMovie() {
  function addMovieHandler(movieData) {
    fetch("https://movie-data-30947-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movieData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section>
      <h1>Add New Movie</h1>
      <AddNewMovieForm onAddMovie={addMovieHandler} />
    </section>
  );
}
