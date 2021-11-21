import React from "react";
import TextField from "@mui/material/TextField";

function Input(props) {
  const { label } = props;
  return (
    <TextField
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
      fullWidth
      label={label}
    />
  );
}
export default Input;
