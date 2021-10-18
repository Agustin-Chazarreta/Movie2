import React from "react";
import IMAGE_BASE_URL from "../../utils/constants";
import classes from "./MovieItem.module.css";
import Card from "../ui/Card";
export default function MoviesItem(props) {
  console.log(props);
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={IMAGE_BASE_URL + props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3> <div>Imbd Rating: {props.rating}</div>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To favorites</button>
        </div>
      </li>
    </Card>
  );
}
