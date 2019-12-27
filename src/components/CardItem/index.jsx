import React from "react";

export default function CardItem({
  id,
  fav,
  onFavorite,
  image,
  name,
  season,
  number
}) {
  return (
    <div
      className={`card-item ${!fav && "fade"}`}
      onClick={() => onFavorite(id, fav)}
    >
      <img src={image} />
      <div>{name}</div>

      <section>
        <div>
          Season: {season} Number: {number}
        </div>
      </section>
    </div>
  );
}
