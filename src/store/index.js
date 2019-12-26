import React, { createContext } from "react";

export const Store = createContext();

const initialState = {};

const reducer = () => {};

export function StoreProvider({ value, children }) {
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
