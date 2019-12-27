import React, { lazy, Suspense, useEffect, useContext } from "react";

import { Store } from "../store";

const CardList = lazy(() => import("../components/CardList"));

export default function HomePage({ onToggleFav }) {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const data = await fetch(
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
      );
      const dataJSON = await data.json();

      return dispatch({
        type: "FETCH_DATA",
        payload: dataJSON._embedded.episodes
      });
    };

    if (!state.episodes.length) {
      fetchEpisodes();
    }
  }, [dispatch, state]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardList episodes={state.episodes} onFavorite={onToggleFav} />
    </Suspense>
  );
}
