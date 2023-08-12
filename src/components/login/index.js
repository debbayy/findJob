import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Col,
  Row,
  Button,
  Container,
} from "reactstrap";

export default function Login() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Container>
        <Col
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "80vh" }}
        >
          <Form className="bg-white rounded p-5 shadow">
            <p className="fw-bold text-center"> Login</p>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input />
              <FormFeedback tooltip>
                You will not be able to see this
              </FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>

            <FormGroup className="position-relative">
              <Label for="examplePassword">Password</Label>
              <Input invalid />
              {/*  <FormFeedback tooltip>
                Oh noes! that name is already taken
              </FormFeedback> */}
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <Col className=" d-flex gap-2 align-items-center justify-content-center">
              <Button color="danger" outline>
                Cancel
              </Button>
              <Button color="primary" onClick={goHome} outline>
                Masuk
              </Button>
            </Col>
          </Form>
        </Col>
      </Container>
    </>
  );
}
