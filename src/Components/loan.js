import React from "react";
import Slider from "@mui/material/Slider";
import loanData from "../store/loan.json";
import "../styling/loan.scss";
import { useQuery } from "react-query";

function Loan(props) {
  const [value, setValue] = React.useState(10000);
  const [valuepayment, setValuePayment] = React.useState(1);

  return (
    <div>
      <div>
        <div className="loanParagrapgh">
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
          <p>{loanData.selectPeriod}</p>
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
    </div>
  );
}

export default Loan;
