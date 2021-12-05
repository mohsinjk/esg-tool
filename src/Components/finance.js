import React from "react";
import { Container, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import { Button } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Dropdown from "./dropDown";
import financeData from "../store/finance.json";
import "../styling/finance.scss";

function Finance() {
  const things = [
    { label: "Car" },
    { label: "MC" },
    { label: "Boat" },
    { label: "Collect loans" },
    { label: "other Consumption" },
  ];
  const employment = [
    { label: "Employee" },
    { label: "Temporarily hired" },
    { label: "Self-employed" },
    { label: "Student" },
    { label: "Pensioner" },
    { label: "Not employed" },
  ];
  function financeInfo() {
    console.log("Finance");
  }
  return (
    <Container>
      <div>
        <h2> {financeData.financeHeading}</h2>
      </div>
      <div className="financeParagraph">
        <p>{financeData.Paragraph}</p>
      </div>
      <div>
        <Dropdown options={things} label={"What do you need to borrow  for?"} />
      </div>
      <br />
      <div>
        <h3>{financeData.liveHeading}</h3>
      </div>
      <div>
        <FormControl component="fieldset">
          <RadioGroup name="radio-buttons-group">
            <FormControlLabel
              value="fisrt"
              control={<Radio />}
              label="I live in a condominium"
            />
            <FormControlLabel
              value="second"
              control={<Radio />}
              label="I live in a tenancy"
            />
            <FormControlLabel
              value="third"
              control={<Radio />}
              label="I live in a villa"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="I have another accommodation"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <br />
      <div>
        <TextField label="What do you have in housing costs?" />

        <br />
      </div>
      <div className="financeParagraph">
        <p>{financeData.SecondParagraph}</p>
      </div>
      <br />
      <div>
        <Dropdown
          options={employment}
          label={"What employement do you have?"}
        />
      </div>
      <br />
      <div>
        <TextField label="What is your monthly salary before tax?" />
      </div>
      <br />
      <div>
        <TextField label="What other income do you have?" />
      </div>
      <div className="financeParagraph">
        <p>{financeData.ThirdParagraph}</p>
      </div>
      <Button variant="contained" onClick={financeInfo}>
        Apply
      </Button>
    </Container>
  );
}
export default Finance;
