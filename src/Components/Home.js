import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
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

function Home() {
  return (
    <div>
      <Jumbotron style={{ height: "100%" }}>
        <Row>
          <Col
            lg={{ offset: "3", size: "6" }}
            xs={{ size: "12" }}
            md={{ offset: "2", size: "8" }}
          >
            <InputGroup size="lg" style={{ height: "3%" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <SearchIcon size="lg" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Search by tags,comments" />
            </InputGroup>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col
            xs="12"
            md={{ offset: "2", size: "8" }}
            lg={{ size: "6", offset: "3" }}
          >
            <div style={{ border: "2px solid black" }}>
              <h2>Top Boards</h2>
              <Row>
                <Col lg={{ size: "3" }} md={{ size: "4" }} xs={{ size: "12" }}>
                  <h4>Anime</h4>
                  <ul>
                    <li>
                      <Link>Action</Link>
                    </li>
                    <li>
                      {" "}
                      <Link>Adventure</Link>
                    </li>
                    <li>
                      <Link>Romance</Link>
                    </li>
                    <li>
                      <Link>Comedy</Link>
                    </li>
                    <li>
                      <Link>Horror</Link>
                    </li>
                    <li>
                      <Link>Thriller</Link>
                    </li>
                    <li>
                      <Link>Shoujo</Link>
                    </li>
                    <li>
                      <Link>Ecchi</Link>
                    </li>
                    <li>
                      <Link>Slice of Life</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={{ size: "3" }} md={{ size: "4" }} xs={{ size: "12" }}>
                  <h4 style={{ font: "bold" }}>Video games</h4>
                  <ul>
                    <li>
                      {" "}
                      <Link>Video Games</Link>
                    </li>
                    <li>
                      <Link>Video Games/Multiplayer</Link>
                    </li>
                    <li>
                      <Link>Video Games/RPG</Link>
                    </li>
                    <li>
                      <Link>Video Games/Strategy</Link>
                    </li>
                    <li>
                      <Link>Video Games/FPS</Link>
                    </li>
                    <li>
                      <Link>Pokemon Games</Link>
                    </li>
                    <li>
                      <Link>CS:GO</Link>
                    </li>
                    <li>
                      <Link>Among us</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={{ size: "3" }} md={{ size: "4" }} xs={{ size: "12" }}>
                  <h4 style={{ font: "bold" }}>Interests </h4>
                  <ul>
                    <li>
                      {" "}
                      <Link>Comics & Cartoons</Link>
                    </li>
                    <li>
                      <Link>Television</Link>
                    </li>
                    <li>
                      <Link>Movies</Link>
                    </li>
                    <li>
                      <Link>Cars</Link>
                    </li>
                    <li>
                      <Link>Animals & Nature</Link>
                    </li>
                    <li>
                      <Link>Science & Math</Link>
                    </li>
                    <li>
                      <Link>History</Link>
                    </li>
                    <li>
                      <Link>International</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={{ size: "3" }} md={{ size: "4" }} xs={{ size: "12" }}>
                  <h4 style={{ font: "bold" }}>Technology</h4>
                  <ul>
                    <li>
                      {" "}
                      <Link>Laptops/Phones</Link>
                    </li>
                    <li>
                      <Link>Drones</Link>
                    </li>
                    <li>
                      <Link>Robots</Link>
                    </li>
                    <li>
                      <Link>AI</Link>
                    </li>
                    <li>
                      <Link>Crypto</Link>
                    </li>
                    <li>
                      <Link>General</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={{ size: "3" }} md={{ size: "4" }} xs={{ size: "12" }}>
                  <h4 style={{ font: "bold" }}>Other</h4>
                  <ul>
                    <li>
                      {" "}
                      <Link>Travel</Link>
                    </li>
                    <li>
                      <Link>Fitness</Link>
                    </li>
                    <li>
                      <Link>Finance</Link>
                    </li>
                    <li>
                      <Link>Music</Link>
                    </li>
                    <li>
                      <Link>Paranormal</Link>
                    </li>
                    <li>
                      <Link>Current News</Link>
                    </li>
                    <li>
                      <Link>Fashion</Link>
                    </li>
                    <li>
                      <Link>DIY</Link>
                    </li>
                    <li>
                      <Link>Relationships</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

export default Home;
