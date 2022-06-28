import React from "react";
import { Nav,Navbar, Container } from "react-bootstrap";

const ToggleNav = () => {
  return (
    <>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className= "navbar-brand">TF</Navbar.Brand>
        <Nav>
        <Nav.Link href="#section1">Home</Nav.Link>
      <Nav.Link href="#section2">Features</Nav.Link>
      <Nav.Link href="#section3">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
};

export default ToggleNav;
