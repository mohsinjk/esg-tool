import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
function Dropdown(props) {
  const { options, label } = props;
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
export default Dropdown;
