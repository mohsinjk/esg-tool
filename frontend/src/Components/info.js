import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import infoData from "../store/info.json";
import "../styling/info.scss";
import { appContext } from "../Context/appContext";

function Info() {
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
        <h2>{infoData.infoHeading}</h2>
      </div>
      <div className="infoParagraph">
        <p>{infoData.Paragraph}</p>
      </div>
      <div>
        <TextField
          name="name"
          value={state.name}
          onChange={handleChange}
          label="Your Name"
        />
        <br />
      </div>
      <br />
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
      <div className="infoParagraph">
        <p>{infoData.FifthParagraph}</p>
        <p>{infoData.SixthParagraph}</p>
      </div>
    </div>
  );
}
export default Info;
