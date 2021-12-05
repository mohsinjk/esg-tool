import React, { useState } from "react";
import { Select, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import { Button } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import financeData from "../store/finance.json";
import "../styling/finance.scss";

function Finance() {
  const things = [
    { label: "Car", value: 1 },
    { label: "MC", value: 2 },
    { label: "Boat", value: 3 },
    { label: "Collect loans", value: 4 },
    { label: "other Consumption", value: 5 },
  ];
  const employments = [
    { label: "Employee" },
    { label: "Temporarily hired" },
    { label: "Self-employed" },
    { label: "Student" },
    { label: "Pensioner" },
    { label: "Not employed" },
  ];
  const [state, setState] = useState({
    thing: "",
    employment: "",
    live: "",
    salary: 0,
    otherIncome: 0,
    housingCost: 0,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function financeInfo() {
    console.log("Finance", state);
  }
  return (
    <div>
      <div>
        <h2> {financeData.financeHeading}</h2>
      </div>
      <div className="financeParagraph">
        <p>{financeData.Paragraph}</p>
      </div>
      <div>
        <InputLabel id="demo-simple-select-label">
          What do you need to borrow for?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="thing"
          value={state.thing}
          name="thing"
          onChange={handleChange}
          label="What do you need to borrow  for?"
        >
          {things?.map((i) => {
            return (
              <MenuItem key={i.value} value={i.value}>
                {i.label ?? i.value}
              </MenuItem>
            );
          })}
        </Select>
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
        <TextField
          name="housingCost"
          onChange={handleChange}
          label="What do you have in housing costs?"
        />

        <br />
      </div>
      <div className="financeParagraph">
        <p>{financeData.SecondParagraph}</p>
      </div>
      <br />
      <div>
        <Select options={employments} label={"What employement do you have?"} />
      </div>
      <br />
      <div>
        <TextField
          name="salary"
          onChange={handleChange}
          label="What is your monthly salary before tax?"
        />
      </div>
      <br />
      <div>
        <TextField
          name="otherIncome"
          onChange={handleChange}
          label="What other income do you have?"
        />
      </div>
      <div className="financeParagraph">
        <p>{financeData.ThirdParagraph}</p>
      </div>
      <Button variant="contained" onClick={financeInfo}>
        Apply
      </Button>
    </div>
  );
}
export default Finance;
