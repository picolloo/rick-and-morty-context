import React, { useContext } from "react";

import { Store } from "../store";
import CardList from "../components/CardList";

export default function FavPage({ onToggleFav }) {
  const { state } = useContext(Store);

  return (
    <div>
      <CardList
        episodes={state.episodes.filter(ep => ep.fav)}
        onFavorite={onToggleFav}
      />
    </div>
  );
}
