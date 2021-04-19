import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import "./NavbarArea.css";
import logo from '../../images/Kaan-FitnessFinal-With-Tagline-White.jpg'
import FigureImage from "react-bootstrap/esm/FigureImage";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
const NavbarArea = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavbarBrand href="#home">
        <FigureImage 
          width={200}
           alt="Adam khan"
           src={logo}
        />
        {/* <img src={logo} alt=""/> */}
        </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse className="justify-content-md-end" id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Link className="pr-5 navbarItem" to="/home">Home</Link>
            <Link className="pr-5 navbarItem" to="/about">About</Link>
            <Link className="pr-5 navbarItem" to="/blog">Blog</Link>
            <Link className="pr-5 navbarItem" to="/login">Contact us</Link>
            <Link className="pr-5 navbarItem" to="/login">Login</Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>

            {/* <Nav className="mr-auto">
              <Link className="pr-5 navbarItem" to="/login"><Button>Login</Button></Link>
            </Nav> */}

        </Form>
        <Nav className="mr-auto">
          <Link className="pr-5 navbarItem" to="/login"><Button>Login</Button></Link>
        </Nav>
      </NavbarCollapse>
      </Navbar>
  );
};

export default NavbarArea;