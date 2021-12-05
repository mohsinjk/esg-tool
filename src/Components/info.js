import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import infoData from "../store/info.json";
import "../styling/info.scss";

function Info() {
  const [state, setState] = useState({
    email: "abc",
    phoneNo: "123",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function saveApplication() {
    console.log("save application", state);
  }
  return (
    <container>
      <div>
        <h2>{infoData.infoHeading}</h2>
      </div>
      <div className="infoParagraph">
        <p>{infoData.Paragraph}</p>
      </div>
      <div>
        <TextField
          name="email"
          value={state.email}
          onChange={handleChange}
          label="E-mail"
        />
        <br />
      </div>
      <br />
      <div>
        <TextField
          name="phoneNo"
          value={state.phoneNo}
          onChange={handleChange}
          label="Mobile number"
        />

        <br />
      </div>
      <div className="infoParagraph">
        <p>{infoData.SecondParagraph}</p>

        <p>{infoData.ThirdParagraph}</p>

        <p>{infoData.FourthParagraph}</p>
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={saveApplication}>
          Apply with mobile BANKID
        </Button>
      </div>
      <div className="infoParagraph">
        <p>{infoData.FifthParagraph}</p>
        <p>{infoData.SixthParagraph}</p>
      </div>
    </container>
  );
}
export default Info;
