import React from "react";

import CardItem from "../CardItem";

export default function CardList({ episodes, onFavorite }) {
  return (
    <div className="card-grid">
      {episodes.map(ep => (
        <CardItem
          key={ep.id}
          id={ep.id}
          onFavourite={onFavorite}
          fav={ep.fav}
          image={ep.image.medium}
          name={ep.name}
          season={ep.season}
          number={ep.number}
        />
      ))}
    </div>
  );
}
