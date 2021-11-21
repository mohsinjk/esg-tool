import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Heading from "../src/Components/heading";
import Button from "../src/Components/button";
import Container from "./Containers/container";
import Loan from "../src/Components/loan";
import Finance from "../src/Components/finance";
import Info from "../src/Components/info";

import { Divider } from "@mui/material";

function App() {
  return (
    <div className="main_div">
      <div className="center_div">
        <Heading />
        <Loan />
        <br />
        <br />
        <Divider>2. Your finances</Divider>
        <br />
        <br />
        <Finance />
        <br />
        <br />
        <Divider>3. Your Information</Divider>
        <br />
        <br />
        <Info />
        {/* <Button name="ok"/>
      <Button name="not ok"/> */}
      </div>
    </div>
  );
}

export default App;
