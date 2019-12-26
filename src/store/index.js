import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  episodes: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        episodes: state.episodes.map(ep =>
          ep.id === action.payload.id ? { ...ep, fav: true } : ep
        )
      };
    case "DEL_FAV":
      return {
        ...state,
        episodes: state.episodes.map(ep =>
          ep.id === action.payload.id ? { ...ep, fav: null } : ep
        )
      };
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
