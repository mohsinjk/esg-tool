import "./App.scss";
import React, { useState } from "react";
import Heading from "../src/Components/heading";
import Loan from "../src/Components/loan";
import Finance from "../src/Components/finance";
import Info from "../src/Components/info";
import Summary from "../src/Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../src/Context/appContext";

function App() {
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
      <div className="summary">
        <Summary />
      </div>
    </div>
  );
}

export default App;
