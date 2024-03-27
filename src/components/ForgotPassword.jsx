import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Card style={{ minWidth: "350px" }}>
        <Card.Body>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Forgot Password
          </h1>
          <Form className="d-flex flex-column align-items-center gap-3">
            <Form.Group className=" w-100">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div className="mt-4">
              <Link to="/signup" className="m-2">
                Signup
              </Link>
              or
              <Link to="/login" className="m-2">
                Login
              </Link>
            </div>
            <Button className="mt-4 w-100" variant="primary" type="submit">
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForgotPassword;
