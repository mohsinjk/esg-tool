import React, { useContext } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import infoData from "../store/info.json";
import "../styling/info.scss";
import { appContext } from "../Context/appContext";
import axios from "axios";

function Summary() {
  const { state, setState } = useContext(appContext);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function saveApplication() {
    console.log("save application", state);
    const data = {
      name: state.name,
      email: state.email,
      phoneNo: state.phoneNo,
      thing: state.thing,
      employment: state.employment,
      livingStyle: state.livingStyle,
      salary: state.salary,
      otherIncome: state.otherIncome,
      housingCost: state.housingCost,
      amount: state.amount,
      period: state.period,
    };
    axios
      .post("http://localhost:8000/api/loanApplications", data)
      .then((res) => console.log(res.data));
  }
  return (
    <div>
      <div>{state.name}</div>
      <div>{state.amount}</div>
      <div>{state.period}</div>
      <div>
        <Button variant="contained" onClick={saveApplication}>
          Apply with mobile BANKID
        </Button>
      </div>
    </div>
  );
}
export default Summary;
