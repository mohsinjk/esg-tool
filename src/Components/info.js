import React from "react";
import Input from "./textField";
import Button from "./button";
import infoData from "../store/info.json";
import "../styling/info.css";

function Info() {
  return (
    <container>
      <div>
        <h2> 3. Your information</h2>
      </div>
      <div className="infoParagraph">
        <p>{infoData.Paragraph}</p>
      </div>
      <div>
        <Input label="E-mail" />

        <br />
      </div>
      <br />
      <div>
        <Input label="Mobile number" />

        <br />
      </div>
      <div className="infoParagraph">
        <p>{infoData.SecondParagraph}</p>

        <p>{infoData.ThirdParagraph}</p>

        <p>{infoData.FourthParagraph}</p>
      </div>
      <br />
      <div>
        <Button name="Apply with mobile BANKID" />
      </div>
      <div className="infoParagraph">
        <p>{infoData.FifthParagraph}</p>
        <p>{infoData.SixthParagraph}</p>
      </div>
    </container>
  );
}
export default Info;
