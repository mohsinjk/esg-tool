import "./App.scss";
import React, { useState } from "react";
import Heading from "../src/Components/heading";
import Loan from "../src/Components/loan";
import Finance from "../src/Components/finance";
import Info from "../src/Components/info";
import Summary from "../src/Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../src/Context/appContext";
import { EditApplication } from "./Pages/editApplication";

function App() {
  return <EditApplication></EditApplication>;
}

export default App;
