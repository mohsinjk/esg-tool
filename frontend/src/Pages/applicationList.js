import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function ApplicationList() {
  const [state, setState] = useState([]);
  const history = useHistory();

  const handleRowClick = (e) => {
    console.log(e);
    history.push("/edit/" + e.id);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: false,
    },
    {
      field: "amount",
      headerName: "Total Amount",
      width: 200,
      editable: false,
    },
    {
      field: "period",
      headerName: "Period",
      type: "number",
      width: 200,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      editable: false,
    },
  ];

  axios
    .get("http://localhost:8000/api/loanApplications")
    .then((res) =>
      setState(res.data.contacts.map((el) => ({ ...el, id: el._id })))
    );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={state}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick={true}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
export { ApplicationList };
