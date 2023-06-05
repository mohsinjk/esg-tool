import "./esg.scss";
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from "../Components/heading";
import Arrangement from "../Components/arrangement";
import Classification from "../Components/classification";
import Summary from "../Components/summary";
import { appContext } from "../Context/appContext";
import { useParams } from "react-router-dom";
import axios from "axios";

import Rules from "../Rules/hello-world";

function Esg() {
  const params = useParams();

  const [state, setState] = useState({
    name: "",
    email: "",
    AR_ID: params.id,
    AR_DESCRIPTION: "",
    AR_SEB_SUST_PROD_TP: "",
    SUST_AREA_TP: "",
    SUST_APPROVAL_AUTHORITY_NAME: params.authority,
    SUST_APPROVAL_AUTHORITY_DATE: "",
    SEB_GBF_VERSION_TP: "",
    SEB_GBF_ASSET_CNTRY_CODE: "",
    SEB_GBF_FINANCING_TP: "",
    SEB_GBF_CATEGORY_TP: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/esgApplications/" + params.id)
      .then((res) => setState(res.data.esgApplication));
  }, []);
  console.log(state);

  return (
    <Container>
      <Row>
        <Col>
          <Heading />
        </Col>
      </Row>
      <Row>
        <Col>
          <appContext.Provider value={{ state, setState }}>
            <Arrangement />
            <Classification />
          </appContext.Provider>
        </Col>
        <Col>
          <appContext.Provider value={{ state, setState }}>
            <Summary />
          </appContext.Provider>
        </Col>
      </Row>
    </Container>
  );
}

export { Esg };
