import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { appContext } from "../Context/appContext";

function Arrangement() {
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
      <Card.Header as="h5">Arrangement</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>Arrangement id</Form.Label>
              <Form.Control name="AR_ID"
                value={state.AR_ID}
                onChange={handleChange}
                placeholder="Enter arrangement id" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mt-3">
              <Form.Label>Arrangement description</Form.Label>
              <Form.Control name="AR_DESCRIPTION"
                value={state.AR_DESCRIPTION}
                onChange={handleChange}
                placeholder="Enter arrangement description" />
            </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>


  );
}

export default Arrangement;
