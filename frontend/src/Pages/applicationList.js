// import "./App.scss";
import React, { useState } from "react";
import Heading from "../Components/heading";
import Loan from "../Components/loan";
import Finance from "../Components/finance";
import Info from "../Components/info";
import Summary from "../Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../Context/appContext";
import { Button } from "@mui/material";
import { Route, Switch, Link } from "react-router-dom";

function ApplicationList() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNo: "",
    thing: "",
    employment: "",
    livingStyle: "",
    salary: 0,
    otherIncome: 0,
    housingCost: 0,
    amount: 10000,
    period: 1,
    currency: "Kr",
    year: "years",
  });

  return <div className="container">List Component</div>;
}

export { ApplicationList };
