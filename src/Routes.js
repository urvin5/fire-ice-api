import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Loader } from "semantic-ui-react";
// import { CharactersPage } from "./Pages/CharactersPage";
const Home = React.lazy(() => import("./Pages/Home"));
const CharactersPage = React.lazy(() => import("./Pages/CharactersPage"));

export function Routes() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          )}
        />
        <Route
          exact
          path="/character"
          render={() => (
            <Suspense fallback={<Loader />}>
              <CharactersPage />
            </Suspense>
          )}
        />
      </Switch>
    </div>
  );
}
