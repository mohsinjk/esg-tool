import "./editApplication";
import React, { useState, useEffect } from "react";
import Heading from "../Components/heading";
import Loan from "../Components/loan";
import Finance from "../Components/finance";
import Info from "../Components/info";
import Summary from "../Components/summary";
import { Divider } from "@mui/material";
import { appContext } from "../Context/appContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditApplication() {
  const params = useParams();

  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNo: "",
    thing: "",
    employment: "",
    livingStyle: "",
    salary: "",
    otherIncome: "",
    housingCost: "",
    amount: "",
    period: "",
    currency: "Kr",
    year: "years",
  });
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/loanApplications/" + params.id)
      .then((res) => setState(res.data.loanApplication));
  }, []);
  console.log(state);

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

export { EditApplication };
