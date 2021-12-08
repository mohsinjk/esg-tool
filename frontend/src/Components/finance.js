import React, { useContext } from "react";
import { Select, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import financeData from "../store/finance.json";
import "../styling/finance.scss";
import { appContext } from "../Context/appContext";

function Finance() {
  const things = [
    { label: "Car", value: "car" },
    { label: "Motor Cycle", value: "mc" },
    { label: "Boat", value: "boat" },
    { label: "Collect loans", value: "collectLoans" },
    { label: "other Consumption", value: "otherComsunptions" },
  ];
  const employments = [
    { label: "Employee", value: "employee" },
    { label: "Temporarily hired", value: "temporarilyHired" },
    { label: "Self-employed", value: "selfEmployed" },
    { label: "Student", value: "student" },
    { label: "Pensioner", value: "pensioner" },
    { label: "Not employed", value: "notEmployed" },
  ];
  const livingStyles = [
    { label: "I live in a condominium", value: 1 },
    { label: "I live in a tenancy", value: 2 },
    { label: "I live in a villa", value: 3 },
    { label: "I have another accommodation", value: 4 },
  ];

  const { state, setState } = useContext(appContext);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
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
        <RadioGroup
          onChange={handleChange}
          value={state.livingStyle}
          name="livingStyle"
        >
          {livingStyles?.map((i) => {
            return (
              <FormControlLabel
                value={i.value}
                control={<Radio />}
                label={i.label}
              />
            );
          })}
        </RadioGroup>
      </div>
      <br />
      <div>
        <TextField
          name="housingCost"
          value={state.housingCost}
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
        <Select
          labelId="demo-simple-select-label"
          id="employment"
          value={state.employment}
          name="employment"
          onChange={handleChange}
          label="What employement do you have?"
        >
          {employments?.map((i) => {
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
        <TextField
          name="salary"
          value={state.salary}
          onChange={handleChange}
          label="What is your monthly salary before tax?"
        />
      </div>
      <br />
      <div>
        <TextField
          name="otherIncome"
          value={state.otherIncome}
          onChange={handleChange}
          label="What other income do you have?"
        />
      </div>
      <div className="financeParagraph">
        <p>{financeData.ThirdParagraph}</p>
      </div>
    </div>
  );
}
export default Finance;
