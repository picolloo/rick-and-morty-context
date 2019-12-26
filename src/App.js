import React, { useContext, useEffect } from "react";

import { Store } from "./store";
import "./App.css";

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

      <div>
        <ul className="card-grid">
          {state.episodes.map(ep => (
            <li
              key={ep.id}
              className={`card-item ${!ep.fav && "fade"}`}
              onClick={() => handleToggleFavEvent(ep)}
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
    </div>
  );
}

export default App;
