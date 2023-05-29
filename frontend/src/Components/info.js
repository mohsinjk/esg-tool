import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "../styling/info.scss";
import { appContext } from "../Context/appContext";

function Info() {
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
      <Card.Header as="h5">Information</Card.Header>
      <Card.Body>
        <Card.Text>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="Enter name" />
              <Form.Text className="text-muted">
                Your Name
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Enter email" />
              <Form.Text className="text-muted">
                Your email address
              </Form.Text>
            </Form.Group>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>

  );
}
export default Info;
