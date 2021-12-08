import "./App.scss";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { EditApplication } from "./Pages/editApplication";
import { ApplicationList } from "./Pages/applicationList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ApplicationList />
        </Route>
        <Route exact path="/add">
          <EditApplication />
        </Route>
        <Route exact path="/edit/:id">
          <EditApplication />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
