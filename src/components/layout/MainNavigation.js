import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Movies</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Movies</Link>
          </li>
          <li>
            <Link to="/addnewmovie">Add New Movie</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
