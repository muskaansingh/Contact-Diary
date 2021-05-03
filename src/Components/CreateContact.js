import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateContact = () => {
  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-danger">ADD NEW CONTACT!</div>
      <div className="card-body">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Control type="phone" placeholder="Enter your Phone No." />
      </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Create Contact
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default CreateContact;
