import {signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import icon from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  

  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="text-dark">
        <Container className="cstm-font">
          <img className="me-4" src={icon} alt="" />
          <Navbar.Brand as={Link} to="/">
            Dazzle Dentist
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {
                user? <Nav.Link onClick={handleSignOut} as={Link} to="/login" eventKey={2}>
                Logout
                </Nav.Link>
                  : <Nav.Link  as={Link} to="/login" eventKey={2}>
                  Login
                </Nav.Link>
              }
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
