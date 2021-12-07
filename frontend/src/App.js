import "./App.scss";
import React, { Fragment, useState } from "react";
import { Switch, Route, Routes, BrowserRouter } from "react-router-dom";
import Heading from "../src/Components/heading";
import Loan from "../src/Components/loan";
import Finance from "../src/Components/finance";
import Info from "../src/Components/info";
import Summary from "../src/Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../src/Context/appContext";
import { EditApplication } from "./Pages/editApplication";
import { ApplicationList } from "./Pages/applicationList";
import { DetailApplication } from "./Pages/detailApplication";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ApplicationList />
        </Route>
        <Route exact path="/edit">
          <EditApplication />
        </Route>
        <Route exact path="/detail/:id">
          <DetailApplication />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
