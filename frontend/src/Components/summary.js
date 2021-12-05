import React, { useContext } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import infoData from "../store/info.json";
import "../styling/info.scss";
import { appContext } from "../Context/appContext";
import axios from "axios";

function Summary() {
  const { state, setState } = useContext(appContext);
  return <div>Summary</div>;
}
export default Summary;
