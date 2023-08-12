import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { userLogin } from "../../redux/slicer";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = localStorage.getItem("_token");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      dispatch(
        userLogin({
          email: user.email,
          password: user.password,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const masuk = () => {
    handleSubmit();

    const delay = 2000; // Waktu penundaan dalam milidetik (2 detik dalam contoh ini)

    const redirectTimer = setTimeout(() => {
      navigate("/home");
    }, delay);

    // Membersihkan timer ketika komponen dibongkar (unmounted)
    return () => clearTimeout(redirectTimer);
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
              <Input
                onChange={handleChange}
                name="email"
                type="email" // Changed type to text to hide the arrow number
                id="email"
                inputMode="numeric" // Added inputMode to restrict input to numeric characters
                pattern="\d*"
              />
              <FormFeedback tooltip>
                You will not be able to see this
              </FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>

            <FormGroup className="position-relative">
              <Label for="examplePassword">Password</Label>
              <Input
                invalid
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
              />
              {/*  <FormFeedback tooltip>
                Oh noes! that name is already taken
              </FormFeedback> */}
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <Col className=" d-flex gap-2 align-items-center justify-content-center">
              <Button color="primary" onClick={masuk} outline>
                Masuk
              </Button>
            </Col>
          </Form>
        </Col>
      </Container>
    </>
  );
}
