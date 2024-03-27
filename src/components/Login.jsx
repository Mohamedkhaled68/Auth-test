import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./context/authContext";

const Login = () => {
  const { handleSubmit } = useAuth();
  return (
    <>
      <Card style={{ minWidth: "350px" }}>
        <Card.Body>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
          <Form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center"
          >
            <Form.Group className=" w-100">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className=" w-100">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" />
            </Form.Group>
            <Link to="/forgot-password" className="mt-4">
              Forgot Password ?
            </Link>
            <Button className="mt-4 w-100" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
