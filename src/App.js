import React, { useContext } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./index.css";
import { Store } from "./store";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import FavPage from "./pages/FavPage";

function App() {
  const { state, dispatch } = useContext(Store);

  const handleToggleFavEvent = (id, fav) => {
    fav
      ? dispatch({
          type: "DEL_FAV",
          payload: { id }
        })
      : dispatch({
          type: "ADD_FAV",
          payload: { id }
        });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header favouriteCount={state.episodes.filter(ep => ep.fav).length} />

        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home onToggleFav={handleToggleFavEvent} />}
          />
          <Route
            path="/favourites"
            exact
            component={() => <FavPage onToggleFav={handleToggleFavEvent} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
