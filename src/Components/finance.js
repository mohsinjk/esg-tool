import React from "react";
import { Container } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Dropdown from "./dropDown";
import Input from "./textField";
import financeData from "../store/finance.json";

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
  return (
    <Container>
      <div>
        <h2> 2. Your finances</h2>
      </div>
      <div style={{ width: 500 }}>
        <p>{financeData.Paragraph}</p>
      </div>
      <div>
        <Dropdown options={things} label={"What do you need to borrow  for?"} />
      </div>
      <br />
      <div>
        <h3>How do you live?</h3>
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
        <Input label="What do you have in housing costs?" />

        <br />
      </div>
      <div style={{ display: "flex", width: 500 }}>
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
        <Input label="What is your monthly salary before tax?" />
      </div>
      <br />
      <div>
        <Input label="What other income do you have?" />
      </div>
      <div style={{ display: "flex", width: 500 }}>
        <p>{financeData.ThirdParagraph}</p>
      </div>
    </Container>
  );
}
export default Finance;
