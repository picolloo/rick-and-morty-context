import React from "react";

export default function CardList({ episodes, onFavorite }) {
  return (
    <div>
      <ul className="card-grid">
        {episodes.map(ep => (
          <li
            key={ep.id}
            className={`card-item ${!ep.fav && "fade"}`}
            onClick={() => onFavorite(ep)}
          >
            <img src={ep.image.medium} />
            <div>{ep.name}</div>

            <section>
              <div>
                Season: {ep.season} Number: {ep.number}
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
