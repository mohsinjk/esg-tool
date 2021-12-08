import React, { useContext } from "react";
import Slider from "@mui/material/Slider";
import loanData from "../store/loan.json";
import "../styling/loan.scss";
import { appContext } from "../Context/appContext";

function Loan() {
  const { state, setState } = useContext(appContext);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="loan">
      <div>
        <p>{loanData.paragraph}</p>
      </div>
      <div>
        <h2>{loanData.loanHeading}</h2>
      </div>
      <div>
        <p>{loanData.selectLoan} </p>
      </div>
      <div className="slider">
        <Slider
          sx={{ width: 300 }}
          valueLabelDisplay="auto"
          step={10000}
          min={10000}
          max={350000}
          onChange={handleChange}
          name="amount"
          value={state.amount}
        />
        <div className="value">
          {state.amount}
          {state.currency}
        </div>
      </div>
      <div>
        <p>{loanData.selectPeriod}</p>
      </div>
      <div className="slider">
        <Slider
          sx={{ width: 300 }}
          valueLabelDisplay="auto"
          step={1}
          min={1}
          max={10}
          onChange={handleChange}
          name="period"
          value={state.period}
        />
        <div className="value">
          {state.period}
          {state.year}
        </div>
      </div>
      <br />
      <div>
        <p>{loanData.SecondParagraph}</p>
        <h1>{loanData.perMonth}</h1>
        <p>{loanData.totalAmount}</p>
      </div>
      <br />
      <div>
        <ul>
          <li>{loanData.firstCondition}</li>
          <li>{loanData.secondCondition}</li>
          <li>{loanData.thirdCondition}</li>
        </ul>
      </div>
    </div>
  );
}

export default Loan;
