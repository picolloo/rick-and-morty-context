import React from "react";
import { Link } from "react-router-dom";

export default function Header({ favouriteCount }) {
  return (
    <div className="header">
      <div>
        <h2>Rick and morty</h2>
        <span>Pick your favourites episodes:</span>
      </div>

      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourite(s): {favouriteCount}
        </Link>
      </div>
    </div>
  );
}
