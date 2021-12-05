import "./App.scss";

import Heading from "../src/Components/heading";
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
        <Divider>2. Your finances</Divider>
        <Finance />
        <Divider>3. Your Information</Divider>
        <Info />
      </div>
    </div>
  );
}

export default App;
