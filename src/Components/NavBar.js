import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import BarChartIcon from "@material-ui/icons/BarChart";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import MoreIcon from "@material-ui/icons/More";
import SearchIcon from "@material-ui/icons/Search";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

  return (
    <div>
      <Navbar
        color="dark"
        light="light"
        expand="md"
        style={{
          color: "white",
        }}
      >
        <NavbarBrand
          href="/"
          style={{
            color: "white",
            fontSize: "2.5rem",
          }}
        >
          {" "}
          <PhotoLibraryIcon fontSize={"large"} /> 7 Chan{" "}
        </NavbarBrand>{" "}
        <NavbarToggler
          onClick={toggle}
          style={{
            backgroundColor: "white",
          }}
        />{" "}
        <Collapse isOpen={isOpen} navbar="navbar">
          <Nav className="mr-auto" navbar="navbar">
            <NavItem>
              <NavLink
                style={{
                  color: "white",
                }}
              >
                {" "}
                <BarChartIcon /> Top{" "}
              </NavLink>{" "}
            </NavItem>{" "}
            <NavItem>
              <NavLink
                style={{
                  color: "white",
                }}
              >
                {" "}
                <NotListedLocationIcon /> Random{" "}
              </NavLink>{" "}
            </NavItem>{" "}
            <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
              <DropdownToggle
                nav="nav"
                caret="caret"
                style={{
                  color: "white",
                }}
              >
                <MoreIcon /> {" Extra"}{" "}
              </DropdownToggle>{" "}
              <DropdownMenu
                right="right"
                style={{
                  backgroundColor: "#343A40",
                }}
              >
                <DropdownItem
                  style={{
                    color: "white",
                    backgroundColor: "#343A40",
                  }}
                >
                  About{" "}
                </DropdownItem>{" "}
                <DropdownItem
                  style={{
                    color: "white",
                    backgroundColor: "#343A40",
                  }}
                >
                  Contribute{" "}
                </DropdownItem>
              </DropdownMenu>{" "}
            </UncontrolledDropdown>{" "}
            <NavbarText
              style={{
                color: "white",
              }}
            ></NavbarText>{" "}
          </Nav>{" "}
          <NavbarText>
            <InputGroup>
              <Link to="/" style={{ color: "white" }}>
                {" "}
                <SearchIcon fontSize="large" />
              </Link>
            </InputGroup>{" "}
          </NavbarText>
          <NavbarText
            style={{
              color: "white",
              marginLeft: "2%",
            }}
          >
            <Button
              color="white"
              onClick={modalToggle}
              style={{ color: "black", backgroundColor: "white" }}
            >
              {"Login/Register"}
            </Button>
            <Modal isOpen={modal} toggle={modalToggle}>
              <ModalHeader toggle={modalToggle}>Modal title</ModalHeader>
              <ModalBody>
                <InputGroup style={{ margin: "1%" }}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Username</InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="username" />
                </InputGroup>
                <InputGroup style={{ margin: "1%" }}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Password </InputGroupText>
                    {"  "}
                  </InputGroupAddon>
                  <Input placeholder="password" type={"password"} />
                </InputGroup>
                <Button outline color="primary" style={{ margin: "1%" }}>
                  Login
                </Button>{" "}
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Sign Up</Button>{" "}
                <Button color="secondary" onClick={modalToggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </NavbarText>
        </Collapse>{" "}
      </Navbar>{" "}
    </div>
  );
}

export default Navigation;
