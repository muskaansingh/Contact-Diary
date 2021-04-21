import React from "react";
import { Form, Button } from "react-bootstrap";

const CreateContact = () => {
  return (
    <div>
      <h1>CREATE CONTACT!</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="phone" placeholder="Enter your Phone No." />
      </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Create Contact
        </Button>
      </Form>
    </div>
  );
};

export default CreateContact;
