import React, {useState} from 'react';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import BarChartIcon from '@material-ui/icons/BarChart';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import MoreIcon from '@material-ui/icons/More';
import SearchIcon from '@material-ui/icons/Search';
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
  NavbarText
} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (<div>
    <Navbar color="dark" light="light" expand="md" style={{
        color: "white"
      }}>
      <NavbarBrand href="/" style={{
          color: "white"
        }}><PhotoLibraryIcon/>7 Chan</NavbarBrand>
      <NavbarToggler onClick={toggle} style={{backgroundColor:"white"}}/>
      <Collapse isOpen={isOpen} navbar="navbar">
        <Nav className="mr-auto" navbar="navbar">
          <NavItem>
            <NavLink style={{
                color: "white"
              }}><BarChartIcon/>Top</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{
                color: "white"
              }}><NotListedLocationIcon/>Random</NavLink>
          </NavItem>
          <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
            <DropdownToggle nav="nav" caret="caret" style={{
                color: "white"
              }}>
              <MoreIcon/>{' Extra'}
            </DropdownToggle>
            <DropdownMenu right="right" style={{
                backgroundColor: "#343A40"
              }}>
              <DropdownItem style={{
                  color: "white",
                  backgroundColor: "#343A40"
                }}>
                About
              </DropdownItem>
              <DropdownItem style={{
                  color: "white",
                  backgroundColor: "#343A40"
                }}>
                Contribute
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText style={{
            color: "white"
          }}>
          <InputGroup>


              <SearchIcon fontSize="large"/>
            <Input placeholder={"Search"} size="sm"/>
          </InputGroup>
        </NavbarText>
      </Collapse>
    </Navbar>
  </div>);
}

export default Navigation;
