import { Button } from "@mui/material";
import React from "react";

function button(props) {
  return (
    <div>
      <Button variant="contained">{props.name}</Button>
    </div>
  );
}

export default button;
