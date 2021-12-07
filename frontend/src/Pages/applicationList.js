import "./App.scss";
import React, { useState } from "react";
import Heading from "../Components/heading";
import Loan from "../Components/loan";
import Finance from "../Components/finance";
import Info from "../Components/info";
import Summary from "../Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../Context/appContext";

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

  return (
    <div className="container">
      <div className="application">
        <appContext.Provider value={{ state, setState }}>
          <Heading />
          <Loan />
          <Divider>2. Your finances</Divider>
          <Finance />
          <Divider>3. Your Information</Divider>
          <Info />
        </appContext.Provider>
      </div>
      <div>
        <appContext.Provider value={{ state, setState }}>
          <Summary />
        </appContext.Provider>
      </div>
    </div>
  );
}

export { ApplicationList };
