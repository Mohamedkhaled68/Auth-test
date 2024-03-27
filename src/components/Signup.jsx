import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Card style={{ minWidth: "350px" }}>
        <Card.Body>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Signup</h1>
          <Form className="d-flex flex-column align-items-center gap-3">
            <Form.Group className=" w-100">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className=" w-100">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" />
            </Form.Group>
            <Form.Group className=" w-100">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="Password" />
            </Form.Group>
            <Link to="/login" className="mt-4">
              Already have an account ?
            </Link>
            <Button className="mt-4 w-100" variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Signup;
