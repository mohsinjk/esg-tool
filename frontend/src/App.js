import "./App.scss";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ApplicationList } from "./Pages/applicationList";
import { Esg } from "./Pages/esg";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ApplicationList />
        </Route>
        <Route exact path="/esg">
          <Esg />
        </Route>
        <Route exact path="/esg/:id">
          <Esg />
        </Route>
        <Route exact path="/esg/:id/:authority">
          <Esg />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
