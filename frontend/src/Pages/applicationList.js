import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

function ApplicationList() {
  const [state, setState] = useState([]);
  const history = useHistory();

  const handleRowClick = (e) => {
    history.push("/esg/" + e.id);
  };

  const columns = [
    { field: "_id", headerName: "#", width: 200 },
    {
      field: "AR_ID",
      headerName: "Arrangment id",
      width: 200,
      editable: false,
    },
    {
      field: "AR_SEB_SUST_PROD_TP",
      headerName: "SEB defined sustainable product types",
      width: 400,
      editable: false,
    },
    {
      field: "SUST_AREA_TP",
      headerName: "Sustainable area type",
      width: 200,
      editable: false,
    },
    {
      field: "SUST_APPROVAL_AUTHORITY_NAME",
      headerName: "Approval authority name",
      width: 200,
      editable: false,
    },
    {
      field: "SUST_APPROVAL_AUTHORITY_DATE",
      headerName: "Approval authority date",
      width: 200,
      editable: false,
    },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/esgApplications")
      .then((res) =>
        setState(res.data.esgApplications.map((el) => ({ ...el, id: el._id })))
      );
  }, []);
  return (

    <Card>
      <Card.Header as="h2">ESG Assessment Tool</Card.Header>
      <Card.Body>
        <Card.Text>
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
        </Card.Text>
      </Card.Body>
    </Card>

  );
}
export { ApplicationList };

