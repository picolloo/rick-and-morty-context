import React, { useContext, useEffect, Suspense, lazy } from "react";

import { Store } from "./store";
import "./index.css";

const CardList = lazy(() => import("./CardList"));

function App() {
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

    fetchEpisodes();
  }, []);

  const handleToggleFavEvent = episode => {
    if (!episode.fav) {
      return dispatch({
        type: "ADD_FAV",
        payload: { id: episode.id }
      });
    }

    dispatch({
      type: "DEL_FAV",
      payload: { id: episode.id }
    });
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h2>Rick and morty</h2>
          <span>Pick your favourites episodes:</span>
        </div>

        <span>Favourite(s): {state.episodes.filter(ep => ep.fav).length}</span>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CardList episodes={state.episodes} onFavorite={handleToggleFavEvent} />
      </Suspense>
    </div>
  );
}

export default App;
