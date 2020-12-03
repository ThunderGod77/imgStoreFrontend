import { Container } from "@material-ui/core";
import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Col,
  Row,
  Button,
  Alert,
} from "reactstrap";
import TheContext from "./../TheContext";

function Registration() {
  const [userName, changeUsername] = useState("");
  const [email, changeEmail] = useState("");
  const [password1, changePassword1] = useState("");
  const [password2, changePassword2] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [showErr, setShowErr] = useState(false);
  const updateUsername = (e) => {
    changeUsername(e.target.value);
  };
  const updateEmail = (e) => {
    changeEmail(e.target.value);
  };
  const updatePassword1 = (e) => {
    changePassword1(e.target.value);
  };
  const updatePassword2 = (e) => {
    changePassword2(e.target.value);
  };
  const register = async () => {
    if (
      password2 === "" ||
      password1 === "" ||
      userName === "" ||
      email === ""
    ) {
      console.log("failed");
      setShowErr(true);
      setErrMessage("Please fill all the above fields.");
    } else if (!email.includes("@") || !email.includes(".com")) {
      setShowErr(true);
      setErrMessage("Please enter a valid email.");
    } else if (password1 !== password2) {
      console.log("password not same");

      setShowErr(true);
      setErrMessage("Passwords do not match.Retry!");
    } else if (password2.length <= 8) {
      console.log("password should be grater than 8 characters");
      setShowErr(true);
      setErrMessage("Password should have more than 8 characters.");
    } else {
      const response = await Axios.post("http://localhost:3000/register", {
        username: userName,
        password: password1,
        email: email,
      });
      if (response.status === 200) {
        setShowErr(true);
        setErrMessage(response.data.message);
      } else if (response.status === 201) {
        console.log("user created successfully");
      } else {
        setShowErr(true);
        setErrMessage("Some error occured.");
      }
    }
  };
  return (
    <div>
      <Jumbotron>
        <Container>
          <Row>
            <Col xs="12" md="6" lg={{ size: "4", offset: "2" }}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Username</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="username"
                  value={userName}
                  onChange={updateUsername}
                />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="12" md="6" lg={{ size: "4", offset: "2" }}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {"    Email     "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="email"
                  type={"email"}
                  value={email}
                  onChange={updateEmail}
                />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="12" md="6" lg={{ size: "4", offset: "2" }}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    {"    Password     "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Please enter your password"
                  type={"password"}
                  value={password1}
                  onChange={updatePassword1}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6" lg={{ size: "4", offset: "2" }}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>{"    Re-Password     "}</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Please repeat your password"
                  type={"password"}
                  value={password2}
                  onChange={updatePassword2}
                />
              </InputGroup>
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              xs={{ size: "5" }}
              md={{ offset: "1", size: "3" }}
              lg={{ size: "2", offset: "1" }}
            >
              <Button color="secondary" onClick={register}>
                Sign up
              </Button>{" "}
            </Col>
            {showErr && (
              <Col
                xs={{ size: "7" }}
                md={{ offset: 1, size: "4" }}
                lg={{ offset: "1", size: "3" }}
              >
                <Alert color="danger">{errMessage}</Alert>
              </Col>
            )}
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Registration;
