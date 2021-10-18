import classes from "./AddNewMovieForm.module.css";
import React from "react";
import Card from "../ui/Card";
import { useRef, useEffect } from "react";

export default function AddNewMovieForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const ratingInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const movieData = {
      title: enteredTitle,
      image: enteredImage,
      rating: enteredRating,
      description: enteredDescription,
    };
    props.onAddMovie(movieData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Movie Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Movie Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="rating">Movie Rating</label>
          <input type="text" required id="rating" ref={ratingInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Movie description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Movie</button>
        </div>
      </form>
    </Card>
  );
}
