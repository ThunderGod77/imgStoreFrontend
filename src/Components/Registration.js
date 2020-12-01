import { Container } from "@material-ui/core";
import React, { useState } from "react";
import {
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Col,
  Row,
} from "reactstrap";

function Registration() {
  const [userName, changeUsername] = useState("");
  const [email, changeEmail] = useState("");
  const [password1, changePassword1] = useState("");
  const [password2, changePassword2] = useState("");
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
                <Input placeholder="username" />
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
                <Input placeholder="email" type={"email"} />
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
                  placeholder="Please repeat your npassword"
                  type={"password"}
                />
              </InputGroup>
            </Col>
          </Row>
          <br />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Registration;
