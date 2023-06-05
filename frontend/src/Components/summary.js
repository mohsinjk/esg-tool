import React, { useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styling/summary.scss";
import { appContext } from "../Context/appContext";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function Summary() {
  const { state } = useContext(appContext);
  const params = useParams();
  const history = useHistory();

  function saveApplication() {
    console.log("save application", state);
    const data = {
      AR_ID: state.AR_ID,
      AR_DESCRIPTION: state.AR_DESCRIPTION,
      AR_SEB_SUST_PROD_TP: state.AR_SEB_SUST_PROD_TP,
      SUST_AREA_TP: state.SUST_AREA_TP,
      SUST_APPROVAL_AUTHORITY_NAME: state.SUST_APPROVAL_AUTHORITY_NAME,
      SUST_APPROVAL_AUTHORITY_DATE: state.SUST_APPROVAL_AUTHORITY_DATE,
      SEB_GBF_VERSION_TP: state.SEB_GBF_VERSION_TP,
      SEB_GBF_ASSET_CNTRY_CODE: state.SEB_GBF_ASSET_CNTRY_CODE,
      SEB_GBF_FINANCING_TP: state.SEB_GBF_FINANCING_TP,
      SEB_GBF_CATEGORY_TP: state.SEB_GBF_CATEGORY_TP,
    };

    axios
      .post("http://localhost:8000/api/esgApplications", data)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      });
  }

  function updateApplication() {
    console.log("update application", state);
    const data = {
      AR_ID: state.AR_ID,
      AR_DESCRIPTION: state.AR_DESCRIPTION,
      AR_SEB_SUST_PROD_TP: state.AR_SEB_SUST_PROD_TP,
      SUST_AREA_TP: state.SUST_AREA_TP,
      SUST_APPROVAL_AUTHORITY_NAME: state.SUST_APPROVAL_AUTHORITY_NAME,
      SUST_APPROVAL_AUTHORITY_DATE: state.SUST_APPROVAL_AUTHORITY_DATE,
      SEB_GBF_VERSION_TP: state.SEB_GBF_VERSION_TP,
      SEB_GBF_ASSET_CNTRY_CODE: state.SEB_GBF_ASSET_CNTRY_CODE,
      SEB_GBF_FINANCING_TP: state.SEB_GBF_FINANCING_TP,
      SEB_GBF_CATEGORY_TP: state.SEB_GBF_CATEGORY_TP,
    };
    axios
      .put("http://localhost:8000/api/esgApplications/" + params.id, data)
      .then((res) => {
        console.log(res.data);
        history.push("/");
      });

  }

  function deleteApplication() {
    console.log("delete application", state);

    axios
      .delete("http://localhost:8000/api/esgApplications/" + params.id)
      .then((res) => console.log(res.data));

    history.push("/");
  }

  return (
    <Card>
      <Card.Header as="h5">Summary</Card.Header>
      <Card.Body>
        <Card.Text>
          <Container>
            <Row>
              <Col sm={6} className="text-secondary">Arrangement id:</Col>
              <Col sm={6}>{state.AR_ID}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Arrangement description:</Col>
              <Col sm={6}>{state.AR_DESCRIPTION}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">SEB defined sustainable product types:</Col>
              <Col sm={6}>{state.AR_SEB_SUST_PROD_TP}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Sustainable area type:</Col>
              <Col sm={6}>{state.SUST_AREA_TP}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Approval authority name:</Col>
              <Col sm={6}>{state.SUST_APPROVAL_AUTHORITY_NAME}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Green bond framework version:</Col>
              <Col sm={6}>{state.SEB_GBF_VERSION_TP}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Green bond framework financing type:</Col>
              <Col sm={6}>{state.SEB_GBF_FINANCING_TP}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Green bond framework category:</Col>
              <Col sm={6}>{state.SEB_GBF_CATEGORY_TP}</Col>
            </Row>

            <Row>
              <Col sm={6} className="text-secondary">Green bond asest country code:</Col>
              <Col sm={6}>{state.SEB_GBF_ASSET_CNTRY_CODE}</Col>
            </Row>
            <Row>
              <Col sm={6} className="text-secondary">Approval authority date:</Col>
              <Col sm={6}>{state.SUST_APPROVAL_AUTHORITY_DATE}</Col>
            </Row>

          </Container>
        </Card.Text>
        <Row>
          <Col sm={4} hidden={state._id}>
            <div className="button">
              <Button variant="primary" onClick={saveApplication}>Approve decision</Button>
            </div>
          </Col>
          <Col sm={4} hidden={!state._id}>
            <div className="button">
              <Button variant="warning" onClick={updateApplication}>Update decision</Button>
            </div>
          </Col>
          <Col sm={4} hidden={!state._id}>
            <div className="delete">
              <Button variant="danger" onClick={deleteApplication}>Delete decision</Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default Summary;
