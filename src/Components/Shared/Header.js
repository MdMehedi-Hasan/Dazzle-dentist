import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container className="cstm-font">
                  <img className="me-4" src={icon} alt="" />
          <Navbar.Brand as={Link} to="/">Dazzle Dentist</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/login" eventKey={2}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
                  </Container>
      </Navbar>
    </div>
  );
};

export default Header;
