import React from "react";
import Slider from "@mui/material/Slider";
import loanData from "../store/loan.json";
import "../styling/loan.css";

function Loan(props) {
  const [value, setValue] = React.useState(10000);
  const [valuepayment, setValuePayment] = React.useState(1);

  return (
    <div>
      <div>
        <div className="div">
          <p>{loanData.paragraph}</p>
        </div>
        <div>
          <h2> 1. Your loan</h2>
        </div>
        <div>
          <p>Select loan amount </p>
        </div>
        <div className="slider">
          <Slider
            sx={{ width: 300 }}
            defaultValue={10000}
            valueLabelDisplay="auto"
            step={5000}
            onChange={(e) => setValue(e.target.value)}
            min={10000}
            max={350000}
          />
          <p>{value}</p>
        </div>
        <div>
          <p>Select repayment period</p>
        </div>
        <div className="slider">
          <Slider
            sx={{ width: 300 }}
            defaultValue={1}
            valueLabelDisplay="auto"
            step={1}
            onChange={(e) => setValuePayment(e.target.value)}
            min={1}
            max={10}
          />
          <p>{valuepayment}</p>
        </div>
        <br />
        <div>
          <p>{loanData.SecondParagraph}</p>
          <h1>SEK 1,938 / month</h1>
          <p>Total: SEK 139,536</p>
        </div>
        <br />
        <div>
          <ul>
            <li>I have turned 20 years old.</li>
            <li>I earn at least SEK 210,000 / year.</li>
            <li>No payment remarks.</li>
          </ul>
        </div>
      </div>
      );
    </div>
  );
}

export default Loan;
