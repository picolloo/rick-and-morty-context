import React, { useContext, lazy, Suspense } from "react";

import { Store } from "../store";

const CardList = lazy(import("../components/CardList"));

export default function FavPage({ onToggleFav }) {
  const { state } = useContext(Store);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CardList>{}</CardList>
      </Suspense>
    </div>
  );
}
