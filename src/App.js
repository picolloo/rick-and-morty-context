import React, { useContext } from "react";

import { Store } from "./store";

function App() {
  const store = useContext(Store);

  console.log(store);

  return (
    <div className="App">
      <h1>Rick and morty</h1>

      <p>Pick your favourites episodes:</p>
    </div>
  );
}

export default App;
