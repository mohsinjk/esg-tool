import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { appContext } from "../Context/appContext";

function Classification() {

  const AR_SEB_SUST_PROD_TP = [
    { label: "Taxonomy aligned specialized lending", value: "Taxonomy aligned specialized lending" },
    { label: "Sustainable loan", value: "Sustainable loan" },
    { label: "Sustainability linked loans", value: "Sustainability linked loans" },
    { label: "Sustainability linked supply chain financing", value: "Sustainability linked supply chain financing" },
    { label: "Sustainable leasing", value: "Sustainable leasing" },
    { label: "Sustainable car leasing", value: "Sustainable car leasing" },
    { label: "Sustainability linked financial guarantees", value: "Sustainability linked financial guarantees" },
    { label: "Sustainable financial guarantee", value: "Sustainable financial guarantee" },
    { label: "Sustainable household mortgage loans", value: "Sustainable household mortgage loans" },
    { label: "Sustainable commercial real estate loans", value: "Sustainable commercial real estate loans" },
    { label: "Sustainable construction credit loans (BYL)", value: "Sustainable construction credit loans (BYL)" },


  ];

  const SUST_AREA_TP = [
    { label: "E", value: "E" },
    { label: "S", value: "S" },
    { label: "G", value: "G" },
  ];

  const SUST_APPROVAL_AUTHORITY_NAME = [
    { label: "RCC", value: "RCC" },
    { label: "GESC", value: "GESC" },
    { label: "SPC", value: "SPC" },
    { label: "ESPSC", value: "ESPSC" },
    { label: "SBRC_LC&FI", value: "SBRC_LC&FI" },
    { label: "SBRC_C&PC", value: "SBRC_C&PC" },
    { label: "SBRC_Baltic", value: "SBRC_Baltic" },
  ];

  const SEB_GBF_VERSION_TP = [
    { label: "GBF2022", value: "GBF2022" },
    { label: "GBF20XX", value: "GBF20XX" },
  ];

  const SEB_GBF_FINANCING_TP = [
    { label: "Refinancing", value: "Refinancing" },
    { label: "New financing", value: "New financing" },
  ];

  const SEB_GBF_CATEGORY_TP = [
    { label: "Renewable energy", value: "Renewable energy" },
    { label: "Energy efficiency", value: "Energy efficiency" },
    { label: "Pollution prevention and control", value: "Pollution prevention and control" },
    { label: "Environmentally sust.management of  living natural resources and land use", value: "Environmentally sust.management of  living natural resources and land use" },
    { label: "Terrestrial and aquatic biodiversity", value: "Terrestrial and aquatic biodiversity" },
    { label: "Clean transportation", value: "Clean transportation" },
    { label: "Sustainable water and wastewater management", value: "Sustainable water and wastewater management" },
    { label: "Climate change adaptation", value: "Climate change adaptation" },
    { label: "Circular economy", value: "Circular economy" },
    { label: "Green buildings", value: "Green buildings" },
  ];

  const { state, setState } = useContext(appContext);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <Card>
      <Card.Header as="h5">Classification</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form>
            <label className="mt-3 form-label">
              SEB defined sustainable product types
            </label>
            <Form.Select id="AR_SEB_SUST_PROD_TP"
              value={state.AR_SEB_SUST_PROD_TP}
              name="AR_SEB_SUST_PROD_TP"
              onChange={handleChange}
              aria-label="Default select example">
              <option>Select sustainable product type</option>
              {AR_SEB_SUST_PROD_TP?.map((i) => {
                return (
                  <option key={i.value} value={i.value}>
                    {i.label ?? i.value}
                  </option>
                );
              })}
            </Form.Select>

            <label className="mt-3 form-label">
              Sustainable area type
            </label>
            {SUST_AREA_TP?.map((i) => {
              return (
                <Form.Check onChange={handleChange}
                  name="SUST_AREA_TP"
                  type="radio"
                  inline
                  label={i.label ?? i.value}
                  id={i.value}
                  value={i.value}
                  checked={i.value == state.SUST_AREA_TP}
                />
              );
            })}

            <label className="mt-3 form-label">
              Approval authority name
            </label>
            {SUST_APPROVAL_AUTHORITY_NAME?.map((i) => {
              return (
                <Form.Check onChange={handleChange}
                  name="SUST_APPROVAL_AUTHORITY_NAME"
                  type="radio"
                  inline
                  label={i.label ?? i.value}
                  id={i.value}
                  value={i.value}
                  checked={i.value == state.SUST_APPROVAL_AUTHORITY_NAME}
                />
              );
            })}


            <label className="mt-3 form-label">
              Green bond framework version
            </label>
            {SEB_GBF_VERSION_TP?.map((i) => {
              return (
                <Form.Check onChange={handleChange}
                  name="SEB_GBF_VERSION_TP"
                  type="radio"
                  inline
                  label={i.label ?? i.value}
                  id={i.value}
                  value={i.value}
                  checked={i.value == state.SEB_GBF_VERSION_TP}
                />
              );
            })}

            <label className="mt-3 form-label">
              Green bond framework financing type
            </label>
            {SEB_GBF_FINANCING_TP?.map((i) => {
              return (
                <Form.Check onChange={handleChange}
                  name="SEB_GBF_FINANCING_TP"
                  type="radio"
                  inline
                  label={i.label ?? i.value}
                  id={i.value}
                  value={i.value}
                  checked={i.value == state.SEB_GBF_FINANCING_TP}
                />
              );
            })}

            <label className="mt-3 form-label">
              Green bond framework category
            </label>
            <Form.Select id="SEB_GBF_CATEGORY_TP"
              value={state.SEB_GBF_CATEGORY_TP}
              name="SEB_GBF_CATEGORY_TP"
              onChange={handleChange}
              aria-label="Default select example">
              <option>Select framework category</option>
              {SEB_GBF_CATEGORY_TP?.map((i) => {
                return (
                  <option key={i.value} value={i.value}>
                    {i.label ?? i.value}
                  </option>
                );
              })}
            </Form.Select>

            <Form.Group className="mt-3">
              <Form.Label>Green bond asest country code</Form.Label>
              <Form.Control name="SEB_GBF_ASSET_CNTRY_CODE"
                value={state.SEB_GBF_ASSET_CNTRY_CODE}
                onChange={handleChange}
                placeholder="Enter country code" />
              <Form.Text className="text-muted">
                Country name or code of asset
              </Form.Text>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Approval authority date</Form.Label>
              <Form.Control name="SUST_APPROVAL_AUTHORITY_DATE"
                value={state.SUST_APPROVAL_AUTHORITY_DATE}
                onChange={handleChange}
                placeholder="Enter date" />
              <Form.Text className="text-muted">
                Date of classification
              </Form.Text>
            </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Classification;
